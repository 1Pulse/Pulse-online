

  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
  
  

  function showPopup(action) {
    let message = '';
    switch(action) {
      case 'reportCase':
        message = 'Here you can report any incidents. Click continue to proceed.';
        break;
      case 'causeCard':
        message = 'Learn about our cause cards. Click to support.';
        break;
      case 'jobCard':
        message = 'Apply for a job here. Click to find more.';
        break;
      case 'nomination':
        message = 'Nominate a community. Click to proceed.';
        break;
      case 'complaint':
        message = 'File a complaint. Click to fill out the form.';
        break;
    }
  
    alert(message + ' Click OK to continue.'); // Placeholder for modal pop-up
  }
  

  function showModal(action) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
  
    let title = '';
    let formContent = '';
  
    switch(action) {
      case 'registerWatch':
        title = 'Register Neighborhood Watch';
        formContent = `
          <form id="register-form">
            <label for="name">Your Name:</label>
            <input type="text" id="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" required>
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" required>
            <button type="submit">Submit</button>
          </form>
        `;
        break;
      case 'joinNetwork':
        title = 'Join Business Network';
        formContent = `
          <form id="join-form">
            <label for="business-name">Business Name:</label>
            <input type="text" id="business-name" required>
            <label for="contact">Contact Person:</label>
            <input type="text" id="contact" required>
            <label for="email">Email:</label>
            <input type="email" id="email" required>
            <button type="submit">Submit</button>
          </form>
        `;
        break;
    }
  
    modalContent.innerHTML = `<h2>${title}</h2>${formContent}`;
    modal.style.display = 'block'; // Show modal
  }
  
  // Close modal function
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }

  document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    alert('Neighborhood Watch registration submitted!');
    closeModal();
  });
  
  document.getElementById('join-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    alert('Business Network application submitted!');
    closeModal();
  });
  
  

  