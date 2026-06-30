/* ==========================================================================
   PROFILE.JS - Profile editing toggles, field validation, password edit popup
   ========================================================================== */

(function () {
  if (window.profileInitialized) return;
  window.profileInitialized = true;

  console.log("Initializing Profile Controller...");

  // 1. Core Profile Dummy Data
  let userProfile = {
    name: "John Doe",
    email: "john.doe@apex.edu",
    phone: "9876543210",
    gender: "male",
    dob: "2002-04-15",
    address: "123 Academic Enclave, Sector 4, Apex City",
    college: "Apex Institute of Technology",
    department: "Computer Science & Engineering",
    enrollment: "CS2022-0948",
    membership: "Premium Scholar"
  };

  // 2. DOM Elements Cache
  const form = document.getElementById('profile-edit-form');
  const editBtn = document.getElementById('profile-edit-btn');
  const saveBtn = document.getElementById('profile-save-btn');
  const cancelBtn = document.getElementById('profile-cancel-btn');
  const changePassBtn = document.getElementById('profile-change-pass-btn');

  // Fields Cache
  const fields = {
    name: document.getElementById('pf-name'),
    email: document.getElementById('pf-email'),
    phone: document.getElementById('pf-phone'),
    gender: document.getElementById('pf-gender'),
    dob: document.getElementById('pf-dob'),
    address: document.getElementById('pf-address'),
    college: document.getElementById('pf-college'),
    department: document.getElementById('pf-department'),
    enrollment: document.getElementById('pf-enrollment')
  };

  // 3. Controller Actions
  function initProfile() {
    loadProfileValues();
    
    if (editBtn) {
      editBtn.addEventListener('click', enableEditMode);
    }
    if (cancelBtn) {
      cancelBtn.addEventListener('click', disableEditMode);
    }
    if (form) {
      form.addEventListener('submit', saveProfileValues);
    }
    if (changePassBtn) {
      changePassBtn.addEventListener('click', openPasswordModal);
    }
  }

  function loadProfileValues() {
    // Populate form inputs
    for (const key in fields) {
      if (fields[key]) {
        fields[key].value = userProfile[key];
      }
    }
    
    // Populate side summary labels
    const summaryName = document.getElementById('sm-profile-name');
    const summaryEmail = document.getElementById('sm-profile-email');
    if (summaryName) summaryName.textContent = userProfile.name;
    if (summaryEmail) summaryEmail.textContent = userProfile.email;
  }

  function enableEditMode() {
    // Remove disabled attributes
    for (const key in fields) {
      if (fields[key]) {
        fields[key].removeAttribute('disabled');
      }
    }
    
    // Toggle action buttons visible states
    if (editBtn) editBtn.style.display = 'none';
    if (saveBtn) saveBtn.style.display = 'inline-flex';
    if (cancelBtn) cancelBtn.style.display = 'inline-flex';
    
    showToast('Editing mode enabled', 'info');
  }

  function disableEditMode() {
    // Restore original values
    loadProfileValues();
    
    // Re-apply disabled attributes
    for (const key in fields) {
      if (fields[key]) {
        fields[key].setAttribute('disabled', 'true');
      }
    }
    
    // Toggle action buttons visible states
    if (editBtn) editBtn.style.display = 'inline-flex';
    if (saveBtn) saveBtn.style.display = 'none';
    if (cancelBtn) cancelBtn.style.display = 'none';
  }

  function saveProfileValues(e) {
    e.preventDefault();

    // Frontend validations
    const nameVal = fields.name.value.trim();
    const emailVal = fields.email.value.trim();
    const phoneVal = fields.phone.value.trim();

    if (!nameVal || !emailVal || !phoneVal) {
      showToast('Please fill out all required fields', 'danger');
      return;
    }

    // Email format validator
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
      showToast('Please enter a valid academic email address', 'danger');
      return;
    }

    // Phone digits validator (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneVal)) {
      showToast('Phone number must be exactly 10 digits', 'danger');
      return;
    }

    // Update data object
    userProfile = {
      ...userProfile,
      name: nameVal,
      email: emailVal,
      phone: phoneVal,
      gender: fields.gender.value,
      dob: fields.dob.value,
      address: fields.address.value.trim(),
      college: fields.college.value.trim(),
      department: fields.department.value.trim(),
      enrollment: fields.enrollment.value.trim()
    };

    // Re-lock fields
    disableEditMode();
    loadProfileValues();

    // Update global navbar profile card text
    const navbarUserName = document.getElementById('navbar-user-fullname');
    if (navbarUserName) navbarUserName.textContent = userProfile.name;

    showToast('Profile details updated successfully!', 'success');
  }

  /* ==========================================================================
     CHANGE PASSWORD MODAL
     ========================================================================== */
  function openPasswordModal() {
    let modalOverlay = document.getElementById('password-modal-overlay');
    if (!modalOverlay) {
      modalOverlay = document.createElement('div');
      modalOverlay.id = 'password-modal-overlay';
      modalOverlay.className = 'modal-overlay';
      modalOverlay.innerHTML = `
        <div class="modal-card">
          <div class="modal-header">
            <h3><i class="fas fa-key"></i> Change Password</h3>
            <button class="modal-close-btn" id="pass-close-btn"><i class="fas fa-times"></i></button>
          </div>
          <form id="password-change-form">
            <div class="form-group">
              <label class="form-label" for="pass-current">Current Password</label>
              <input type="password" class="form-control" id="pass-current" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="pass-new">New Password</label>
              <input type="password" class="form-control" id="pass-new" required minlength="6">
            </div>
            <div class="form-group">
              <label class="form-label" for="pass-confirm">Confirm New Password</label>
              <input type="password" class="form-control" id="pass-confirm" required minlength="6">
            </div>
            <div class="modal-actions">
              <button type="button" class="btn btn-secondary" id="pass-cancel-btn">Cancel</button>
              <button type="submit" class="btn btn-primary">Update Password</button>
            </div>
          </form>
        </div>
      `;
      document.body.appendChild(modalOverlay);

      // Event registrations
      document.getElementById('pass-close-btn').addEventListener('click', closePasswordModal);
      document.getElementById('pass-cancel-btn').addEventListener('click', closePasswordModal);
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closePasswordModal();
      });

      document.getElementById('password-change-form').addEventListener('submit', handlePasswordSubmit);
    }

    // Reset password inputs
    document.getElementById('pass-current').value = '';
    document.getElementById('pass-new').value = '';
    document.getElementById('pass-confirm').value = '';

    modalOverlay.style.display = 'flex';
    setTimeout(() => {
      modalOverlay.classList.add('active');
    }, 50);
  }

  function closePasswordModal() {
    const modalOverlay = document.getElementById('password-modal-overlay');
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      setTimeout(() => {
        modalOverlay.style.display = 'none';
      }, 300);
    }
  }

  function handlePasswordSubmit(e) {
    e.preventDefault();
    const current = document.getElementById('pass-current').value;
    const newPass = document.getElementById('pass-new').value;
    const confirm = document.getElementById('pass-confirm').value;

    if (newPass !== confirm) {
      showToast('New passwords do not match!', 'danger');
      return;
    }

    if (newPass.length < 6) {
      showToast('Password must be at least 6 characters long', 'danger');
      return;
    }

    // Mock verification
    showToast('Validating current password credentials...', 'info');
    setTimeout(() => {
      closePasswordModal();
      showToast('Password updated successfully!', 'success');
    }, 1200);
  }

  // Load and setup form
  setTimeout(initProfile, 50);

  // Clean script flag on reload
  const observer = new MutationObserver(() => {
    if (!document.getElementById('profile-edit-form')) {
      window.profileInitialized = false;
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

})();
