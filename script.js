// Copy Solana Deposit Address to clipboard
document.querySelector('.btn-copy').addEventListener('click', function () {
  const depositInput = document.querySelector('.deposit-box input');
  depositInput.select();
  document.execCommand('copy');
  alert('Solana Deposit Address copied to clipboard!');
});

// Smooth scrolling for section navigation when icons are clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
          window.scrollTo({
              top: targetSection.offsetTop - 60, // Adjust for navbar height
              behavior: 'smooth',
          });
      }
  });
});

// Handle "Get Started" button click to scroll to About section
document.querySelector('.btn-primary').addEventListener('click', function () {
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
      window.scrollTo({
          top: aboutSection.offsetTop - 60, // Adjust for navbar height
          behavior: 'smooth',
      });
  }
});

// Placeholder functionality for Register Section
document.querySelector('.btn-register').addEventListener('click', function () {
  alert('Register functionality will be implemented here.');
  // Redirect or show a modal for registration
});

// Placeholder functionality for Contact Section
document.getElementById('contact-form')?.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission
  const name = document.getElementById('contact-name').value;
  const message = document.getElementById('contact-message').value;

  if (!name || !message) {
      alert('Please provide both your name and message.');
      return;
  }

  alert('Your message has been sent to the team!');
  this.reset(); // Reset the form after submission
});
