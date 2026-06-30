/* ==========================================================================
   DASHBOARD.JS - Dashboard page animation counters, recent logs, activity logs
   ========================================================================== */

(function () {
  // Check if initialization runs twice
  if (window.dashboardInitialized) return;
  window.dashboardInitialized = true;

  console.log("Initializing Dashboard script...");

  // Dummy Data Arrays
  const statistics = [
    { id: 'total', target: 20, text: 'Total Certificates' },
    { id: 'verified', target: 15, text: 'Verified Credentials' },
    { id: 'pending', target: 4, text: 'Pending Reviews' },
    { id: 'downloads', target: 28, text: 'Downloads Count' }
  ];

  const recentCertificates = [
    { id: "OCVS-9872-4820", name: "Advanced Web Development", issuer: "Tech Academy", date: "2026-06-15", status: "verified" },
    { id: "OCVS-1092-3847", name: "Cloud Infrastructure Specialist", issuer: "Amazon Web Services", date: "2026-06-10", status: "verified" },
    { id: "OCVS-7382-9102", name: "UI/UX Advanced Engineering", issuer: "Design Institute", date: "2026-06-20", status: "pending" },
    { id: "OCVS-2283-9481", name: "Certified Scrum Master (CSM)", issuer: "Scrum Alliance", date: "2026-05-18", status: "verified" },
    { id: "OCVS-3810-1849", name: "Machine Learning & AI", issuer: "Stanford Online", date: "2026-06-25", status: "rejected" }
  ];

  const activities = [
    { icon: "fa-certificate", type: "success", title: "Certificate Verified", desc: "Your 'Advanced Web Development' credential has been approved.", time: "2 hours ago" },
    { icon: "fa-download", type: "info", title: "Certificate Downloaded", desc: "Downloaded AWS Cloud Infrastructure Certificate PDF.", time: "5 hours ago" },
    { icon: "fa-eye", type: "info", title: "Certificate Viewed", desc: "An recruiter from Google viewed your credential profile.", time: "1 day ago" },
    { icon: "fa-user-cog", type: "warning", title: "Profile Info Updated", desc: "You updated your contact address and phone details.", time: "3 days ago" },
    { icon: "fa-shield-alt", type: "danger", title: "Security Login Alert", desc: "New login detected from Windows Chrome, Chrome App.", time: "5 days ago" }
  ];

  // 1. Animated counter trigger
  function animateCounters() {
    statistics.forEach(stat => {
      const el = document.getElementById(`count-${stat.id}`);
      if (!el) return;

      const target = stat.target;
      let current = 0;
      const duration = 1200; // Total animation length in milliseconds
      const stepTime = Math.max(Math.floor(duration / target), 30);
      
      const timer = setInterval(() => {
        current += 1;
        el.textContent = current;
        if (current >= target) {
          el.textContent = target; // Safeguard exact target matching
          clearInterval(timer);
        }
      }, stepTime);
    });
  }

  // 2. Populate Recent Certificates Table
  function populateRecentTable() {
    const tbody = document.getElementById('recent-certs-tbody');
    if (!tbody) return;

    tbody.innerHTML = ''; // Clear contents

    recentCertificates.forEach(cert => {
      const tr = document.createElement('tr');
      
      let badgeClass = 'badge-warning';
      if (cert.status === 'verified') badgeClass = 'badge-success';
      if (cert.status === 'rejected') badgeClass = 'badge-danger';

      tr.innerHTML = `
        <td style="font-weight: 600;">${cert.id}</td>
        <td>${cert.name}</td>
        <td>${cert.issuer}</td>
        <td>${formatDate(cert.date)}</td>
        <td><span class="badge ${badgeClass}">${cert.status}</span></td>
        <td>
          <div class="table-actions">
            <a href="#/certificate-details?id=${cert.id}" class="action-icon-btn" title="View"><i class="fas fa-eye"></i></a>
            <button class="action-icon-btn btn-download-mock" data-id="${cert.id}" title="Download"><i class="fas fa-download"></i></button>
            <button class="action-icon-btn btn-share-mock" data-id="${cert.id}" data-name="${cert.name}" title="Share"><i class="fas fa-share-alt"></i></button>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  // 3. Populate Recent Activities Timeline
  function populateTimeline() {
    const timelineEl = document.getElementById('dashboard-timeline');
    if (!timelineEl) return;

    timelineEl.innerHTML = ''; // Clear contents

    activities.forEach(act => {
      const div = document.createElement('div');
      div.className = `timeline-item ${act.type}`;
      div.innerHTML = `
        <div class="timeline-icon"><i class="fas ${act.icon}"></i></div>
        <div class="timeline-content">
          <span class="timeline-title">${act.title}</span>
          <span class="timeline-desc">${act.desc}</span>
          <span class="timeline-time">${act.time}</span>
        </div>
      `;
      timelineEl.appendChild(div);
    });
  }

  // 4. Hook quick actions triggers
  function setupQuickActions() {
    document.querySelectorAll('.btn-download-mock').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const certId = btn.getAttribute('data-id') || 'Latest';
        showToast(`Preparing download for credential ID ${certId}...`, 'info');
        setTimeout(() => {
          showToast(`Downloaded successfully!`, 'success');
        }, 1500);
      });
    });

    document.querySelectorAll('.btn-share-mock').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const name = btn.getAttribute('data-name');
        showToast(`Copied public link for '${name}' to clipboard!`, 'success');
      });
    });
  }

  // Helper date formatter
  function formatDate(dateStr) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
  }

  // Self running initialisation
  setTimeout(() => {
    animateCounters();
    populateRecentTable();
    populateTimeline();
    setupQuickActions();
  }, 100);

  // Clean script flag on reload
  const observer = new MutationObserver(() => {
    if (!document.getElementById('count-total')) {
      window.dashboardInitialized = false;
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

})();
