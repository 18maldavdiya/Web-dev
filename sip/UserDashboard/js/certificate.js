/* ==========================================================================
   CERTIFICATE.JS - 20 Certificates Database, Filters, Search, Pagination & Preview
   ========================================================================== */

(function () {
  if (window.certificateInitialized) return;
  window.certificateInitialized = true;

  console.log("Initializing Certificates Database & Controller...");

  // 1. 20 Realistic Certificates Dummy Database
  const certificatesData = [
    { id: "OCVS-9872-4820", name: "Advanced Web Development & Cloud Architecture", course: "B.Tech Computer Science", department: "Engineering", college: "Apex Institute of Technology", enrollment: "CS2022-0948", issuer: "Tech Academy Ltd", date: "2026-06-15", expiry: "Never", status: "verified" },
    { id: "OCVS-1092-3847", name: "AWS Certified Cloud Infrastructure Specialist", course: "Cloud Computing Specialization", department: "Information Technology", college: "Global Technical University", enrollment: "IT2023-1102", issuer: "Amazon Web Services", date: "2026-06-10", expiry: "2029-06-10", status: "verified" },
    { id: "OCVS-7382-9102", name: "UI/UX Advanced Engineering & Micro-Interactions", course: "B.Des Communication Design", department: "Design & Arts", college: "Metro Arts Academy", enrollment: "DS2024-4820", issuer: "Design Institute International", date: "2026-06-20", expiry: "Never", status: "pending" },
    { id: "OCVS-2283-9481", name: "Certified Agile Scrum Master Training", course: "Management Systems", department: "Business Studies", college: "National Management School", enrollment: "MS2022-8812", issuer: "Scrum Alliance Corp", date: "2026-05-18", expiry: "2028-05-18", status: "verified" },
    { id: "OCVS-3810-1849", name: "Introduction to Machine Learning & Deep Neural Nets", course: "M.Tech Data Science", department: "Science & Engineering", college: "Apex Institute of Technology", enrollment: "DS2025-0012", issuer: "Stanford Online Education", date: "2026-06-25", expiry: "Never", status: "rejected" },
    
    { id: "OCVS-8812-7301", name: "Cybersecurity Analyst Bootcamp", course: "Information Security Diploma", department: "Computer Applications", college: "Central Science Institute", enrollment: "IS2023-7402", issuer: "CompTIA Security Division", date: "2026-04-12", expiry: "2029-04-12", status: "verified" },
    { id: "OCVS-1940-2048", name: "Data Structures & Algorithms in Java", course: "B.Tech Computer Science", department: "Engineering", college: "Apex Institute of Technology", enrollment: "CS2022-0056", issuer: "Computer Science Society", date: "2026-05-02", expiry: "Never", status: "verified" },
    { id: "OCVS-9932-8401", name: "React Front-End Professional", course: "B.C.A Software Engineering", department: "Computer Applications", college: "Metro Arts Academy", enrollment: "CA2024-9104", issuer: "Meta Developer Network", date: "2026-03-22", expiry: "Never", status: "verified" },
    { id: "OCVS-5520-2910", name: "Full Stack Engineer Certification", course: "Full-Stack Bootcamp", department: "Software Systems", college: "Global Technical University", enrollment: "FS2025-0209", issuer: "CodeAcademy Tech", date: "2026-06-05", expiry: "Never", status: "pending" },
    { id: "OCVS-6012-4820", name: "DevOps Engineer Professional", course: "Software Systems Eng", department: "Engineering", college: "Global Technical University", enrollment: "EN2021-3829", issuer: "RedHat Linux Training", date: "2026-05-30", expiry: "2029-05-30", status: "verified" },
    
    { id: "OCVS-7711-2094", name: "AI Ethical Hacker Certification", course: "M.Tech Cyber Security", department: "Science & Engineering", college: "Apex Institute of Technology", enrollment: "CS2025-1102", issuer: "EC-Council Global", date: "2026-06-18", expiry: "2028-06-18", status: "pending" },
    { id: "OCVS-4491-0394", name: "Python Core Essentials & Libraries", course: "Introductory Programming", department: "Information Technology", college: "Central Science Institute", enrollment: "IT2024-3849", issuer: "Python Software Foundation", date: "2026-01-15", expiry: "Never", status: "verified" },
    { id: "OCVS-3094-1182", name: "Certified Kubernetes Administrator (CKA)", course: "M.Tech Data Science", department: "Science & Engineering", college: "Apex Institute of Technology", enrollment: "DS2025-0482", issuer: "The Linux Foundation", date: "2026-05-22", expiry: "2029-05-22", status: "verified" },
    { id: "OCVS-8302-3920", name: "SQL & Relational Databases Mastery", course: "B.C.A Software Engineering", department: "Computer Applications", college: "Metro Arts Academy", enrollment: "CA2024-0012", issuer: "Oracle Training Services", date: "2026-02-28", expiry: "Never", status: "verified" },
    { id: "OCVS-5920-1920", name: "Ethical AI Design & Biases Testing", course: "Humanities & AI Ethics", department: "Social Sciences", college: "National Management School", enrollment: "SS2023-9204", issuer: "Partnership on AI Labs", date: "2026-06-01", expiry: "Never", status: "rejected" },
    
    { id: "OCVS-9912-3840", name: "Microservices Architecture & API Gateway Design", course: "B.Tech Computer Science", department: "Engineering", college: "Apex Institute of Technology", enrollment: "CS2022-0495", issuer: "MuleSoft Tech Partner", date: "2026-04-30", expiry: "Never", status: "verified" },
    { id: "OCVS-7722-1029", name: "Digital Marketing Certified Professional", course: "MBA Marketing", department: "Business Studies", college: "National Management School", enrollment: "MB2024-1102", issuer: "Google Digital Garage", date: "2026-03-10", expiry: "Never", status: "verified" },
    { id: "OCVS-1029-3829", name: "Product Management Essentials", course: "MBA Marketing", department: "Business Studies", college: "National Management School", enrollment: "MB2024-1109", issuer: "Product School Inc", date: "2026-05-05", expiry: "Never", status: "pending" },
    { id: "OCVS-3948-2839", name: "Enterprise Blockchain Specialist", course: "Financial Technologies", department: "Business Studies", college: "National Management School", enrollment: "FT2024-4820", issuer: "Blockchain Council", date: "2026-04-18", expiry: "2029-04-18", status: "verified" },
    { id: "OCVS-4839-1029", name: "User Interface Design & Design Systems", course: "B.Des Communication Design", department: "Design & Arts", college: "Metro Arts Academy", enrollment: "DS2024-0021", issuer: "Figma Academy Global", date: "2026-05-12", expiry: "Never", status: "verified" }
  ];

  // Router sub-routing coordinator
  setTimeout(() => {
    const hash = window.location.hash || '#/dashboard';
    
    if (hash.startsWith('#/my-certificates')) {
      initializeMyCertificates();
    } else if (hash.startsWith('#/certificate-details')) {
      initializeCertificateDetails();
    }
  }, 50);

  /* ==========================================================================
     MY CERTIFICATES CONTROLLER
     ========================================================================== */
  function initializeMyCertificates() {
    console.log("My Certificates View Loading...");

    const searchInput = document.getElementById('certs-search-input');
    const sortSelect = document.getElementById('certs-sort-select');
    const cardsGrid = document.getElementById('certs-grid');
    const filterChips = document.querySelectorAll('.filter-chip');
    const paginationContainer = document.getElementById('certs-pagination');

    let currentFilter = 'all';
    let searchQuery = '';
    let currentSort = 'newest';
    let currentPage = 1;
    const itemsPerPage = 6;

    // Render loop
    function renderList() {
      // 1. Filter dataset
      let filtered = certificatesData.filter(cert => {
        const matchesFilter = currentFilter === 'all' || cert.status === currentFilter;
        const matchesSearch = cert.name.toLowerCase().includes(searchQuery) || cert.id.toLowerCase().includes(searchQuery);
        return matchesFilter && matchesSearch;
      });

      // 2. Sort dataset
      filtered.sort((a, b) => {
        if (currentSort === 'newest') return new Date(b.date) - new Date(a.date);
        if (currentSort === 'oldest') return new Date(a.date) - new Date(b.date);
        if (currentSort === 'a-z') return a.name.localeCompare(b.name);
        if (currentSort === 'z-a') return b.name.localeCompare(a.name);
        return 0;
      });

      // 3. Paginate calculations
      const totalItems = filtered.length;
      const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
      
      if (currentPage > totalPages) currentPage = totalPages;
      const startIndex = (currentPage - 1) * itemsPerPage;
      const paginatedItems = filtered.slice(startIndex, startIndex + itemsPerPage);

      // 4. Render Grid HTML
      if (cardsGrid) {
        cardsGrid.innerHTML = '';
        if (paginatedItems.length === 0) {
          cardsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; padding: 4rem 1rem; text-align: center; border: 1px dashed var(--border-color); border-radius: var(--border-radius); background: var(--card-color)">
              <div style="font-size: 2rem; color: var(--text-muted); margin-bottom: 1rem;"><i class="fas fa-search"></i></div>
              <h3 style="color: var(--text-primary);">No certificates found</h3>
              <p style="color: var(--text-secondary); margin-top: 0.25rem;">Adjust your filter selections or keyword spelling.</p>
            </div>`;
          if (paginationContainer) paginationContainer.innerHTML = '';
          return;
        }

        paginatedItems.forEach(cert => {
          const card = document.createElement('div');
          card.className = 'card card-lift certificate-card';
          
          let badgeClass = 'badge-warning';
          if (cert.status === 'verified') badgeClass = 'badge-success';
          if (cert.status === 'rejected') badgeClass = 'badge-danger';

          // SVG background styling matching
          card.innerHTML = `
            <div class="certificate-thumb">
              <span class="badge ${badgeClass} certificate-status-badge">${cert.status}</span>
              <!-- Renders mini-SVG placeholder preview -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 550" style="width:100%; height:100%; pointer-events: none;">
                <rect x="0" y="0" width="800" height="550" fill="#FCFDFF" />
                <rect x="15" y="15" width="770" height="520" fill="none" stroke="#2563EB" stroke-width="6" />
                <text x="400" y="180" font-family="Poppins" font-size="28" font-weight="600" fill="#1E3A8A" text-anchor="middle">CERTIFICATE</text>
                <text x="400" y="220" font-family="Poppins" font-size="12" fill="#6B7280" text-anchor="middle">OF EXCELLENCE</text>
                <text x="400" y="320" font-family="Times New Roman" font-size="36" font-style="italic" fill="#D97706" text-anchor="middle" font-weight="bold">${cert.enrollment ? 'Verified Student' : 'Student Name'}</text>
                <line x1="250" y1="340" x2="550" y2="340" stroke="#E5E7EB" stroke-width="2" />
                <text x="400" y="400" font-family="Poppins" font-size="12" fill="#9CA3AF" text-anchor="middle">ID: ${cert.id}</text>
              </svg>
            </div>
            <div class="certificate-card-content">
              <h3 class="certificate-card-title">${cert.name}</h3>
              <ul class="certificate-meta-list">
                <li><i class="fas fa-university"></i> ${cert.issuer}</li>
                <li><i class="fas fa-calendar-alt"></i> Issued: ${formatDate(cert.date)}</li>
                <li><i class="fas fa-barcode"></i> Credential ID: ${cert.id}</li>
              </ul>
              <div class="certificate-card-actions">
                <a href="#/certificate-details?id=${cert.id}" class="btn btn-primary" style="font-size:0.775rem; padding: 0.5rem;"><i class="fas fa-eye"></i> View</a>
                <button class="btn btn-secondary btn-card-download" data-id="${cert.id}" title="Download PDF"><i class="fas fa-download"></i></button>
                <button class="btn btn-secondary btn-card-share" data-id="${cert.id}" data-name="${cert.name}" title="Share Public Link"><i class="fas fa-share-alt"></i></button>
              </div>
            </div>
          `;
          cardsGrid.appendChild(card);
        });
      }

      // 5. Render Pagination controls
      if (paginationContainer) {
        paginationContainer.innerHTML = '';
        if (totalPages <= 1) return;

        // Prev btn
        const prevBtn = document.createElement('button');
        prevBtn.className = 'pagination-btn';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.disabled = currentPage === 1;
        prevBtn.addEventListener('click', () => { currentPage--; renderList(); });
        paginationContainer.appendChild(prevBtn);

        // Page Numbers
        for (let i = 1; i <= totalPages; i++) {
          const numBtn = document.createElement('button');
          numBtn.className = `pagination-btn ${currentPage === i ? 'active' : ''}`;
          numBtn.textContent = i;
          numBtn.addEventListener('click', () => { currentPage = i; renderList(); });
          paginationContainer.appendChild(numBtn);
        }

        // Next btn
        const nextBtn = document.createElement('button');
        nextBtn.className = 'pagination-btn';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.addEventListener('click', () => { currentPage++; renderList(); });
        paginationContainer.appendChild(nextBtn);
      }

      // Attach Card-specific action listeners
      attachCardActions();
    }

    // Connect interactions
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        currentPage = 1;
        renderList();
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderList();
      });
    }

    filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentFilter = chip.getAttribute('data-filter');
        currentPage = 1;
        renderList();
      });
    });

    // Helper functions inside controller
    function attachCardActions() {
      document.querySelectorAll('.btn-card-download').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const certId = btn.getAttribute('data-id');
          showToast(`Initializing PDF download layout for ${certId}...`, 'info');
          btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
          setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-download"></i>';
            showToast('Certificate PDF downloaded successfully!', 'success');
          }, 1500);
        });
      });

      document.querySelectorAll('.btn-card-share').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const certId = btn.getAttribute('data-id');
          const certName = btn.getAttribute('data-name');
          openShareModal(certId, certName);
        });
      });
    }

    // Trigger Initial Render
    renderList();
  }

  /* ==========================================================================
     CERTIFICATE DETAILS PREVIEW CONTROLLER
     ========================================================================== */
  function initializeCertificateDetails() {
    console.log("Certificate Details View Loading...");
    
    // Parse query string for cert ID
    const hash = window.location.hash;
    let certId = "OCVS-9872-4820"; // Default fallback
    
    if (hash.includes('?')) {
      const queryParams = new URLSearchParams(hash.split('?')[1]);
      if (queryParams.has('id')) {
        certId = queryParams.get('id');
      }
    }

    // Fetch matching object
    const cert = certificatesData.find(c => c.id === certId) || certificatesData[0];
    
    // Renders Details page HTML DOM bindings
    const previewWrapper = document.getElementById('cert-detail-frame-container');
    if (previewWrapper) {
      // Setup dynamic SVG content matching the selected certificate details
      previewWrapper.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 550" width="100%" height="100%">
          <defs>
            <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FBBF24" />
              <stop offset="50%" stop-color="#D97706" />
              <stop offset="100%" stop-color="#B45309" />
            </linearGradient>
            <linearGradient id="border-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#1E3A8A" />
              <stop offset="50%" stop-color="#2563EB" />
              <stop offset="100%" stop-color="#1D4ED8" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="800" height="550" fill="#FCFDFF" />
          <rect x="20" y="20" width="760" height="510" rx="10" fill="none" stroke="url(#border-grad)" stroke-width="8" />
          <rect x="34" y="34" width="732" height="482" rx="6" fill="none" stroke="url(#gold-grad)" stroke-width="3" />
          <path d="M 20 50 L 50 20 M 20 60 L 60 20 M 20 480 L 70 530" fill="none" stroke="url(#gold-grad)" stroke-width="2" />
          <path d="M 780 50 L 750 20 M 780 480 L 730 530" fill="none" stroke="url(#gold-grad)" stroke-width="2" />

          <text x="400" y="100" font-family="'Times New Roman', Times, serif" font-size="34" font-weight="bold" fill="#1E3A8A" text-anchor="middle" letter-spacing="3">CERTIFICATE OF COMPLETION</text>
          <text x="400" y="135" font-family="'Poppins', sans-serif" font-size="12" fill="#6B7280" text-anchor="middle" letter-spacing="1.5">THIS CREDENTIAL IS PROUDLY PRESENTED TO</text>
          
          <!-- Selected Student Details -->
          <text x="400" y="210" font-family="'Times New Roman', Times, serif" font-size="38" font-style="italic" font-weight="bold" fill="#D97706" text-anchor="middle">John Doe</text>
          <line x1="200" y1="230" x2="600" y2="230" stroke="#E5E7EB" stroke-width="2" />
          
          <text x="400" y="270" font-family="'Poppins', sans-serif" font-size="13" fill="#4B5563" text-anchor="middle">for successfully completing all requirements for the training course in</text>
          
          <!-- Selected Course details -->
          <text x="400" y="305" font-family="'Poppins', sans-serif" font-size="18" font-weight="bold" fill="#111827" text-anchor="middle">${cert.name}</text>
          <text x="400" y="340" font-family="'Poppins', sans-serif" font-size="11" fill="#6B7280" text-anchor="middle">Credential ID: ${cert.id} | Issued Date: ${formatDate(cert.date)}</text>

          <line x1="150" y1="440" x2="300" y2="440" stroke="#9CA3AF" stroke-width="1" />
          <text x="225" y="460" font-family="'Poppins', sans-serif" font-size="11" fill="#6B7280" text-anchor="middle">Authorized Signature</text>
          <text x="225" y="430" font-family="'Brush Script MT', cursive" font-size="22" fill="#1E3A8A" text-anchor="middle">E. Harrison</text>

          <line x1="500" y1="440" x2="650" y2="440" stroke="#9CA3AF" stroke-width="1" />
          <text x="575" y="460" font-family="'Poppins', sans-serif" font-size="11" fill="#6B7280" text-anchor="middle">Registrar Signature</text>
          <text x="575" y="430" font-family="'Brush Script MT', cursive" font-size="22" fill="#1E3A8A" text-anchor="middle">M. Sterling</text>

          <!-- Gold Seal placement -->
          <g transform="translate(400, 430) scale(0.8)">
            <circle cx="0" cy="0" r="35" fill="url(#gold-grad)" />
            <path d="M-15 15 L-25 45 L0 35 L25 45 L15 15 Z" fill="url(#gold-grad)" opacity="0.9" />
            <circle cx="0" cy="0" r="28" fill="none" stroke="#FFFFFF" stroke-dasharray="3, 3" stroke-width="1.5" />
            <text x="0" y="4" font-family="'Poppins', sans-serif" font-size="9" font-weight="bold" fill="#FFFFFF" text-anchor="middle">VERIFIED</text>
          </g>
        </svg>
      `;
    }

    // Inject data fields
    document.getElementById('dt-student-name').textContent = "John Doe"; // Static profile owner name
    document.getElementById('dt-enrollment').textContent = cert.enrollment;
    document.getElementById('dt-course').textContent = cert.course;
    document.getElementById('dt-department').textContent = cert.department;
    document.getElementById('dt-college').textContent = cert.college;
    
    document.getElementById('dt-cert-id').textContent = cert.id;
    document.getElementById('dt-cert-title').textContent = cert.name;
    document.getElementById('dt-cert-issuer').textContent = cert.issuer;
    document.getElementById('dt-cert-issue').textContent = formatDate(cert.date);
    document.getElementById('dt-cert-expiry').textContent = cert.expiry === 'Never' ? 'Never' : formatDate(cert.expiry);
    
    const badgeContainer = document.getElementById('dt-cert-status-badge');
    if (badgeContainer) {
      let badgeClass = 'badge-warning';
      if (cert.status === 'verified') badgeClass = 'badge-success';
      if (cert.status === 'rejected') badgeClass = 'badge-danger';
      badgeContainer.className = `badge ${badgeClass}`;
      badgeContainer.textContent = cert.status;
    }

    // Set QR code mockup placeholder SVG content
    const qrEl = document.getElementById('detail-qr-code');
    if (qrEl) {
      qrEl.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
          <rect width="100" height="100" fill="#FFFFFF" />
          <!-- QR Frame anchors -->
          <rect x="5" y="5" width="25" height="25" fill="none" stroke="#000000" stroke-width="6" />
          <rect x="11" y="11" width="13" height="13" fill="#000000" />
          <rect x="70" y="5" width="25" height="25" fill="none" stroke="#000000" stroke-width="6" />
          <rect x="76" y="11" width="13" height="13" fill="#000000" />
          <rect x="5" y="70" width="25" height="25" fill="none" stroke="#000000" stroke-width="6" />
          <rect x="11" y="76" width="13" height="13" fill="#000000" />
          <!-- Random QR Matrix Blocks -->
          <rect x="40" y="10" width="10" height="15" fill="#000000" />
          <rect x="45" y="30" width="15" height="10" fill="#000000" />
          <rect x="15" y="45" width="10" height="15" fill="#000000" />
          <rect x="70" y="40" width="15" height="15" fill="#000000" />
          <rect x="40" y="70" width="15" height="10" fill="#000000" />
          <rect x="75" y="75" width="15" height="10" fill="#000000" />
          <rect x="55" y="55" width="10" height="10" fill="#000000" />
        </svg>
      `;
    }

    // Set action items triggers
    const downloadBtn = document.getElementById('details-download-btn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        showToast('Rendering and generating PDF container...', 'info');
        setTimeout(() => {
          showToast('Certificate PDF downloaded!', 'success');
        }, 1500);
      });
    }

    const printBtn = document.getElementById('details-print-btn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    const shareBtn = document.getElementById('details-share-btn');
    if (shareBtn) {
      shareBtn.addEventListener('click', () => {
        openShareModal(cert.id, cert.name);
      });
    }
  }

  /* ==========================================================================
     GLOBAL SHARE MODAL MANAGER
     ========================================================================== */
  function openShareModal(id, name) {
    // Create Share Modal element dynamically if not present
    let modalOverlay = document.getElementById('share-modal-overlay');
    if (!modalOverlay) {
      modalOverlay = document.createElement('div');
      modalOverlay.id = 'share-modal-overlay';
      modalOverlay.className = 'share-modal-overlay';
      modalOverlay.innerHTML = `
        <div class="share-modal">
          <div class="share-modal-header">
            <h3><i class="fas fa-share-alt"></i> Share Certificate</h3>
            <button class="modal-close-btn" id="share-close-btn"><i class="fas fa-times"></i></button>
          </div>
          <p style="font-size:0.825rem; color:var(--text-secondary); margin-bottom:1rem;" id="share-modal-subtitle"></p>
          <div class="share-links-grid">
            <div class="share-option" data-platform="linkedin">
              <div class="share-icon-circle" style="background-color:rgba(10, 102, 194, 0.1); color:#0A66C2"><i class="fab fa-linkedin-in"></i></div>
              <span>LinkedIn</span>
            </div>
            <div class="share-option" data-platform="twitter">
              <div class="share-icon-circle" style="background-color:rgba(29, 161, 242, 0.1); color:#1DA1F2"><i class="fab fa-twitter"></i></div>
              <span>Twitter</span>
            </div>
            <div class="share-option" data-platform="facebook">
              <div class="share-icon-circle" style="background-color:rgba(24, 119, 242, 0.1); color:#1877F2"><i class="fab fa-facebook-f"></i></div>
              <span>Facebook</span>
            </div>
            <div class="share-option" data-platform="whatsapp">
              <div class="share-icon-circle" style="background-color:rgba(37, 211, 102, 0.1); color:#25D366"><i class="fab fa-whatsapp"></i></div>
              <span>WhatsApp</span>
            </div>
          </div>
          <div class="share-link-input-wrapper">
            <input type="text" class="form-control" id="share-link-copy-field" readonly>
            <button class="btn btn-primary" id="share-link-copy-btn">Copy</button>
          </div>
        </div>
      `;
      document.body.appendChild(modalOverlay);

      // Register modal close triggers
      document.getElementById('share-close-btn').addEventListener('click', closeShareModal);
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeShareModal();
      });

      // Platform share triggers
      document.querySelectorAll('.share-option').forEach(opt => {
        opt.addEventListener('click', () => {
          const platform = opt.getAttribute('data-platform');
          showToast(`Redirecting to share on ${platform.toUpperCase()}...`, 'info');
          setTimeout(() => {
            closeShareModal();
            showToast('Shared successfully!', 'success');
          }, 1000);
        });
      });

      // Copy input trigger
      document.getElementById('share-link-copy-btn').addEventListener('click', () => {
        const field = document.getElementById('share-link-copy-field');
        field.select();
        field.setSelectionRange(0, 99999); // Mobile compatibility
        navigator.clipboard.writeText(field.value);
        showToast('Link copied to clipboard!', 'success');
      });
    }

    // Populating modal fields values
    const publicUrl = `https://verification.ocvs.org/credential/verify?id=${id}`;
    document.getElementById('share-modal-subtitle').textContent = `Copy the verification link for "${name}".`;
    document.getElementById('share-link-copy-field').value = publicUrl;

    // Show Overlay
    modalOverlay.style.display = 'flex';
    setTimeout(() => {
      modalOverlay.classList.add('active');
    }, 50);
  }

  function closeShareModal() {
    const modalOverlay = document.getElementById('share-modal-overlay');
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      setTimeout(() => {
        modalOverlay.style.display = 'none';
      }, 300);
    }
  }

  // Date formatting utility
  function formatDate(dateStr) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
  }

  // Clean script flag on reload
  const observer = new MutationObserver(() => {
    if (!document.getElementById('certs-search-input') && !document.getElementById('cert-detail-frame-container')) {
      window.certificateInitialized = false;
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

})();
