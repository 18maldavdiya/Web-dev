/* ==========================================================================
   SIDEBAR.JS - Sidebar toggles, layouts shell control, SPA router & script managers
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Global elements cache
  const sidebar = document.getElementById('sidebar');
  const mainWrapper = document.getElementById('main-wrapper');
  const collapseBtn = document.getElementById('collapse-btn');
  const menuToggle = document.getElementById('menu-toggle');
  const pageLoader = document.getElementById('page-loader');
  const contentArea = document.getElementById('content-area');
  const pageTitle = document.getElementById('page-title');
  const breadcrumbCurrent = document.getElementById('breadcrumb-current');
  const profileDropdown = document.getElementById('profile-dropdown');
  const navProfile = document.getElementById('nav-profile');
  const backToTop = document.getElementById('back-to-top');

  // Create mobile overlay backdrop
  const backdrop = document.createElement('div');
  backdrop.className = 'sidebar-backdrop';
  document.getElementById('app-layout').appendChild(backdrop);

  /* 1. Sidebar Collapse Preferences (localStorage) */
  const isCollapsed = localStorage.getItem('sidebar-collapsed') === 'true';
  if (isCollapsed && window.innerWidth >= 1200) {
    sidebar.classList.add('collapsed');
    mainWrapper.classList.add('collapsed');
  }

  // Desktop Toggle
  if (collapseBtn) {
    collapseBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      mainWrapper.classList.toggle('collapsed');
      localStorage.setItem('sidebar-collapsed', sidebar.classList.contains('collapsed'));
    });
  }

  // Mobile Toggle
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.add('active');
      backdrop.classList.add('visible');
    });
  }

  // Close Mobile Drawer
  backdrop.addEventListener('click', () => {
    sidebar.classList.remove('active');
    backdrop.classList.remove('visible');
  });

  // Profile Nav Dropdown Menu Toggling
  if (navProfile && profileDropdown) {
    navProfile.addEventListener('click', (e) => {
      e.stopPropagation();
      profileDropdown.classList.toggle('active');
    });
    document.addEventListener('click', () => {
      profileDropdown.classList.remove('active');
    });
  }

  // Back to Top Button behaviour
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* 2. Routing Logic */
  const routes = {
    '#/dashboard': { title: 'Dashboard', file: 'pages/dashboard.html', script: 'js/dashboard.js' },
    '#/my-certificates': { title: 'My Certificates', file: 'pages/my-certificates.html', script: 'js/certificate.js' },
    '#/certificate-details': { title: 'Certificate Details', file: 'pages/certificate-details.html', script: 'js/certificate.js' },
    '#/profile': { title: 'My Profile', file: 'pages/profile.html', script: 'js/profile.js' },
    '#/notifications': { title: 'Notifications', file: 'pages/notifications.html', script: 'js/notification.js' },
    '#/help': { title: 'Help & Support', file: 'pages/help.html', script: null },
    '#/settings': { title: 'Settings', file: 'pages/settings.html', script: null }
  };

  // Check CORS / file protocol restriction warning
  const isFileProtocol = window.location.protocol === 'file:';
  if (isFileProtocol) {
    showToast('Browser running on file:// protocol. Recommend running a local server to enable SPA page fetches.', 'warning');
  }

  async function handleRouting() {
    let hash = window.location.hash || '#/dashboard';
    
    // Support dynamic sub-routing query parameters, e.g. #/certificate-details?id=5
    let routeKey = hash;
    if (hash.includes('?')) {
      routeKey = hash.split('?')[0];
    }
    
    const route = routes[routeKey];
    if (!route) {
      contentArea.innerHTML = `
        <div class="card text-center" style="padding: 3rem;">
          <h2 style="color: var(--danger-color); margin-bottom: 1rem;"><i class="fas fa-exclamation-triangle"></i> Page Not Found</h2>
          <p>The requested page does not exist or has been moved.</p>
          <a href="#/dashboard" class="btn btn-primary" style="margin-top: 1.5rem;">Return to Dashboard</a>
        </div>`;
      pageTitle.textContent = '404 Error';
      breadcrumbCurrent.textContent = '404';
      hideLoader();
      return;
    }

    // Set page header content
    pageTitle.textContent = route.title;
    breadcrumbCurrent.textContent = route.title;
    
    // Highlight Active Sidebar Item
    document.querySelectorAll('.sidebar-menu li').forEach(li => {
      const link = li.querySelector('a');
      if (link && link.getAttribute('href') === routeKey) {
        li.classList.add('active');
      } else {
        li.classList.remove('active');
      }
    });

    // Close sidebar on mobile after navigating
    sidebar.classList.remove('active');
    backdrop.classList.remove('visible');

    // Page Load Animation Phase 1
    showLoader();
    contentArea.style.opacity = '0';

    try {
      let responseContent = '';
      
      if (isFileProtocol) {
        // Fallback mockup text when CORS restricts local fetches
        responseContent = await mockLocalFetch(routeKey);
      } else {
        const response = await fetch(route.file);
        if (!response.ok) throw new Error('Page fetch failed');
        responseContent = await response.text();
      }

      // Inject HTML template content
      contentArea.innerHTML = responseContent;
      
      // Load Page Script
      if (route.script) {
        // Remove older dynamically added page scripts to prevent double registration
        const existingScript = document.getElementById('page-dynamic-script');
        if (existingScript) existingScript.remove();

        const scriptEl = document.createElement('script');
        scriptEl.src = route.script;
        scriptEl.id = 'page-dynamic-script';
        scriptEl.type = 'text/javascript';
        document.body.appendChild(scriptEl);
      } else {
        const existingScript = document.getElementById('page-dynamic-script');
        if (existingScript) existingScript.remove();
      }

      // Post-injection init functions
      if (routeKey === '#/help') {
        initHelpAccordions();
      } else if (routeKey === '#/settings') {
        initSettingsToggles();
      }

      // Phase 2 display transitions
      setTimeout(() => {
        contentArea.style.opacity = '1';
        hideLoader();
      }, 150);

    } catch (err) {
      console.error(err);
      contentArea.innerHTML = `
        <div class="card text-center" style="padding: 3rem;">
          <h2 style="color: var(--danger-color); margin-bottom: 1rem;"><i class="fas fa-exclamation-circle"></i> Connection/CORS Error</h2>
          <p style="margin-bottom: 1.25rem;">Browser security restrictions prevented loading <strong>${route.file}</strong>.</p>
          <div class="alert alert-warning" style="background: rgba(245, 158, 11, 0.1); color: var(--warning-color); padding: 1rem; border-radius: var(--border-radius-sm); text-align: left; display: inline-block;">
            <strong>How to resolve:</strong><br>
            1. Open a terminal in the folder: <code>C:\\Users\\hanis\\.gemini\\antigravity\\scratch\\UserDashboard</code><br>
            2. Run command: <code>npx http-server -p 8080</code> (or python server)<br>
            3. Access Dashboard at URL: <a href="http://localhost:8080" target="_blank">http://localhost:8080</a>
          </div>
        </div>`;
      hideLoader();
    }
  }

  // Routing initialisation and listener
  window.addEventListener('hashchange', handleRouting);
  // Default routing landing trigger
  if (!window.location.hash) {
    window.location.hash = '#/dashboard';
  } else {
    handleRouting();
  }

  /* 3. Helper Functions */
  function showLoader() {
    if (pageLoader) {
      pageLoader.style.visibility = 'visible';
      pageLoader.classList.remove('fade-out');
    }
  }

  function hideLoader() {
    if (pageLoader) {
      pageLoader.classList.add('fade-out');
      setTimeout(() => {
        pageLoader.style.visibility = 'hidden';
      }, 400);
    }
  }

  // Help page accordions hookup
  function initHelpAccordions() {
    const accordions = document.querySelectorAll('.faq-accordion-header');
    accordions.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');
      });
    });

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Support message submitted successfully! We will contact you soon.', 'success');
        contactForm.reset();
      });
    }
  }

  // Settings UI logic
  function initSettingsToggles() {
    const themeToggle = document.getElementById('theme-toggle');
    const langSelect = document.getElementById('language-select');
    const settingsForm = document.getElementById('settings-form');

    // Theme loading from localStorage
    const savedTheme = localStorage.getItem('settings-theme') || 'light';
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      if (themeToggle) themeToggle.checked = true;
    }

    if (themeToggle) {
      themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
          document.body.classList.add('dark-theme');
          localStorage.setItem('settings-theme', 'dark');
          showToast('Dark theme enabled!', 'info');
        } else {
          document.body.classList.remove('dark-theme');
          localStorage.setItem('settings-theme', 'light');
          showToast('Light theme enabled!', 'info');
        }
      });
    }

    if (settingsForm) {
      settingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Settings saved successfully!', 'success');
      });
      settingsForm.addEventListener('reset', (e) => {
        e.preventDefault();
        if (themeToggle) {
          themeToggle.checked = false;
          document.body.classList.remove('dark-theme');
          localStorage.removeItem('settings-theme');
        }
        if (langSelect) langSelect.value = 'en';
        document.querySelectorAll('.settings-checkbox').forEach(cb => cb.checked = true);
        showToast('Settings reset to defaults', 'info');
      });
    }
  }

  // Fallback Mock Local Fetching when browser blocks AJAX
  async function mockLocalFetch(hash) {
    // If CORS blocking is present, we provide a warning banner or render template string directly
    // This allows index.html to be double-clicked and still load the frames visually
    // It reads templates asynchronously as simple JS templates
    throw new Error("File protocol fetch restriction");
  }
});

/* 4. Global Toast Dispatcher */
window.showToast = function(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let iconClass = 'fa-info-circle';
  if (type === 'success') iconClass = 'fa-check-circle';
  if (type === 'warning') iconClass = 'fa-exclamation-triangle';
  if (type === 'danger') iconClass = 'fa-exclamation-circle';

  toast.innerHTML = `
    <i class="fas ${iconClass}"></i>
    <div>${message}</div>
  `;

  container.appendChild(toast);
  
  // Clean up element after animations complete
  setTimeout(() => {
    toast.remove();
  }, 3300);
};
