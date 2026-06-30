/* ==========================================================================
   NOTIFICATION.JS - 15 Notifications database, filters, deletion and unread state
   ========================================================================== */

(function () {
  if (window.notificationInitialized) return;
  window.notificationInitialized = true;

  console.log("Initializing Notifications Controller...");

  // 1. 15 Realistic Dummy Notifications Database
  let notificationsData = [
    { id: 1, type: "cert-issued", title: "Certificate Issued", desc: "Stanford Online issued your 'Intro to Machine Learning' credential.", date: "2026-06-25T11:30:00Z", unread: true },
    { id: 2, type: "cert-verified", title: "Certificate Approved", desc: "Registrar approved verification for your Advanced Web Development credential.", date: "2026-06-22T09:15:00Z", unread: true },
    { id: 3, type: "cert-downloaded", title: "Download Successful", desc: "AWS Certificate PDF successfully generated and downloaded.", date: "2026-06-20T16:45:00Z", unread: false },
    { id: 4, type: "profile-updated", title: "Profile Changes Saved", desc: "Account security settings and contact details were updated.", date: "2026-06-18T10:00:00Z", unread: false },
    { id: 5, type: "security-login", title: "New Login Detected", desc: "Login activity detected from Chrome on Windows - IP 192.168.1.48.", date: "2026-06-15T22:12:00Z", unread: true },
    
    { id: 6, type: "cert-verified", title: "Certificate Approved", desc: "Agile Scrum Master credential has been marked as verified.", date: "2026-06-12T14:30:00Z", unread: false },
    { id: 7, type: "cert-issued", title: "Certificate Issued", desc: "Figma Academy issued your 'User Interface Design Systems' certificate.", date: "2026-06-08T08:20:00Z", unread: false },
    { id: 8, type: "cert-downloaded", title: "Download Successful", desc: "Stanford ML Certificate PDF downloaded to local storage.", date: "2026-06-05T12:05:00Z", unread: false },
    { id: 9, type: "profile-updated", title: "Avatar Picture Changed", desc: "You successfully uploaded a new avatar profile image.", date: "2026-06-01T15:40:00Z", unread: false },
    { id: 10, type: "security-login", title: "Password Change Notification", desc: "Your user account password was updated successfully.", date: "2026-05-28T18:10:00Z", unread: false },
    
    { id: 11, type: "cert-verified", title: "Certificate Approved", desc: "Cybersecurity Bootcamp credential verified by administration.", date: "2026-05-20T11:00:00Z", unread: false },
    { id: 12, type: "cert-issued", title: "Certificate Issued", desc: "Oracle Academy issued 'SQL Relational Databases Mastery'.", date: "2026-05-18T09:30:00Z", unread: false },
    { id: 13, type: "cert-downloaded", title: "Download Successful", desc: "Kubernetes CKA Certificate PDF downloaded.", date: "2026-05-15T16:22:00Z", unread: false },
    { id: 14, type: "security-login", title: "Session Expired", desc: "Session cleared automatically due to inactivity timeout.", date: "2026-05-10T14:00:00Z", unread: false },
    { id: 15, type: "cert-verified", title: "Certificate Approved", desc: "Full Stack Engineer bootcamp certificate verified.", date: "2026-05-05T11:45:00Z", unread: false }
  ];

  // DOM Cache
  const listContainer = document.getElementById('notifications-list');
  const emptyState = document.getElementById('notifications-empty-state');
  const countBadge = document.getElementById('notifications-unread-count');
  const markAllBtn = document.getElementById('notif-mark-all-btn');
  const filterChips = document.querySelectorAll('.notification-filter-chip');

  let activeFilter = 'all';

  function initNotifications() {
    renderNotifications();
    updateGlobalBadges();

    // Mark all trigger
    if (markAllBtn) {
      markAllBtn.addEventListener('click', () => {
        notificationsData.forEach(n => n.unread = false);
        renderNotifications();
        updateGlobalBadges();
        showToast('All notifications marked as read', 'success');
      });
    }

    // Filters toggling
    filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeFilter = chip.getAttribute('data-filter');
        renderNotifications();
      });
    });
  }

  function renderNotifications() {
    if (!listContainer) return;

    listContainer.innerHTML = ''; // Clear items

    // Filter items
    const filtered = notificationsData.filter(n => {
      return activeFilter === 'all' || (activeFilter === 'unread' && n.unread);
    });

    // Check empty state
    if (filtered.length === 0) {
      if (emptyState) {
        emptyState.style.display = 'flex';
        emptyState.classList.add('active');
      }
      return;
    } else {
      if (emptyState) {
        emptyState.style.display = 'none';
        emptyState.classList.remove('active');
      }
    }

    // Render Cards
    filtered.forEach(notif => {
      const card = document.createElement('div');
      card.className = `notification-item-card ${notif.unread ? 'unread' : ''}`;
      card.id = `notif-card-${notif.id}`;

      let iconClass = 'fa-bell';
      if (notif.type === 'cert-issued') iconClass = 'fa-certificate';
      if (notif.type === 'cert-verified') iconClass = 'fa-check-circle';
      if (notif.type === 'cert-downloaded') iconClass = 'fa-download';
      if (notif.type === 'profile-updated') iconClass = 'fa-user-cog';
      if (notif.type === 'security-login') iconClass = 'fa-shield-alt';

      card.innerHTML = `
        <div class="notification-icon-box ${notif.type}">
          <i class="fas ${iconClass}"></i>
        </div>
        <div class="notification-body">
          <span class="notification-text">${notif.title}</span>
          <span class="notification-desc">${notif.desc}</span>
          <span class="notification-timestamp">${formatTime(notif.date)}</span>
        </div>
        <div class="notification-item-actions">
          ${notif.unread ? `<button class="action-icon-btn btn-read-trigger" data-id="${notif.id}" title="Mark Read"><i class="fas fa-envelope-open"></i></button>` : ''}
          <button class="action-icon-btn btn-delete-trigger" data-id="${notif.id}" title="Delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        ${notif.unread ? `<div class="notification-unread-dot"></div>` : ''}
      `;
      listContainer.appendChild(card);
    });

    // Attach card actions click listeners
    attachItemActions();
  }

  function attachItemActions() {
    // Mark as read click
    document.querySelectorAll('.btn-read-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.getAttribute('data-id'));
        const index = notificationsData.findIndex(n => n.id === id);
        if (index !== -1) {
          notificationsData[index].unread = false;
          
          // Animate card unread state removal
          const card = document.getElementById(`notif-card-${id}`);
          if (card) {
            card.classList.remove('unread');
            const dot = card.querySelector('.notification-unread-dot');
            if (dot) dot.remove();
            btn.remove(); // Remove mark read icon
          }
          
          updateGlobalBadges();
          showToast('Marked as read', 'info');
        }
      });
    });

    // Delete click
    document.querySelectorAll('.btn-delete-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.getAttribute('data-id'));
        
        // Find and remove card visually with fadeout animation
        const card = document.getElementById(`notif-card-${id}`);
        if (card) {
          card.style.transform = 'translateX(50px)';
          card.style.opacity = '0';
          
          setTimeout(() => {
            notificationsData = notificationsData.filter(n => n.id !== id);
            renderNotifications();
            updateGlobalBadges();
            showToast('Notification deleted', 'info');
          }, 300);
        }
      });
    });
  }

  function updateGlobalBadges() {
    const unreadCount = notificationsData.filter(n => n.unread).length;
    
    // Updates local header badge
    if (countBadge) {
      countBadge.textContent = unreadCount;
      countBadge.style.display = unreadCount > 0 ? 'inline-block' : 'none';
    }

    // Updates global top navigation bell badge
    const navBadge = document.getElementById('navbar-bell-badge');
    if (navBadge) {
      navBadge.style.display = unreadCount > 0 ? 'block' : 'none';
    }
  }

  function formatTime(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins} minutes ago`;
    if (diffHours < 24) return `${diffHours} hours ago`;
    return `${diffDays} days ago`;
  }

  // Load and init views
  setTimeout(initNotifications, 50);

  // Clean script flag on reload
  const observer = new MutationObserver(() => {
    if (!document.getElementById('notifications-list')) {
      window.notificationInitialized = false;
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

})();
