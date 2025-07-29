// Download CV button functionality

document.addEventListener('DOMContentLoaded', function() {
  const downloadBtn = document.getElementById('download-cv');
  downloadBtn.addEventListener('click', function() {
    // Check if CV file exists, otherwise show a message
    const cvFile = 'Utkarsh.pdf'; // Updated to match your actual file
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Utkarsh_Rai_CV.pdf';
    
    // Add error handling
    link.onerror = function() {
      alert('CV file not found. Please ensure Utkarsh.pdf is in the same directory.');
    };
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  // --- Enhanced Navigation ---
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- Dynamic Certificates Gallery ---
  const certificates = [
    // Example objects. Add your certificates here:
    // { src: 'cert1.jpg', alt: 'Certificate 1', link: 'cert1.pdf' },
    // { src: 'cert2.jpg', alt: 'Certificate 2' },
  ];

  const gallery = document.getElementById('certificates-gallery');
  if (gallery && certificates.length > 0) {
    certificates.forEach(cert => {
      let el;
      if (cert.link) {
        el = document.createElement('a');
        el.href = cert.link;
        el.target = '_blank';
        el.rel = 'noopener';
        const img = document.createElement('img');
        img.src = cert.src;
        img.alt = cert.alt;
        img.className = 'certificate-img';
        el.appendChild(img);
      } else {
        el = document.createElement('img');
        el.src = cert.src;
        el.alt = cert.alt;
        el.className = 'certificate-img';
      }
      gallery.appendChild(el);
    });
  } else if (gallery) {
    // Show a better placeholder if no certificates are present
    const placeholder = document.createElement('div');
    placeholder.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: #888;">
        <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">No certificates added yet</p>
        <p style="font-size: 0.9rem;">Add your certificates in script.js to display them here</p>
      </div>
    `;
    gallery.appendChild(placeholder);
  }

  // --- Smooth horizontal scroll on mouse wheel for gallery ---
  if (gallery) {
    gallery.addEventListener('wheel', function(e) {
      if (e.deltaY === 0) return;
      e.preventDefault();
      gallery.scrollBy({ left: e.deltaY, behavior: 'smooth' });
    }, { passive: false });
  }

  // --- Add loading animation for profile image ---
  const profilePic = document.getElementById('profile-pic');
  if (profilePic) {
    profilePic.addEventListener('load', function() {
      this.style.opacity = '1';
    });
    profilePic.style.opacity = '0';
    profilePic.style.transition = 'opacity 0.3s ease-in';
  }

  // --- Add scroll reveal animation ---
  const sections = document.querySelectorAll('.profile, .projects, .experience, .certifications');
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
  });

  // --- Only keep custom darkmode toggle using 'darkmode' class on body ---
  let darkmode = localStorage.getItem('darkmode');
  const themeSwitch = document.getElementById('theme-switch');

  const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
  };

  const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
  };

  // Always open in dark mode unless user set light mode
  if (darkmode === 'active' || darkmode === null) enableDarkmode();

  if (themeSwitch) {
    themeSwitch.addEventListener('click', () => {
      darkmode = localStorage.getItem('darkmode');
      darkmode !== 'active' ? enableDarkmode() : disableDarkmode();
    });
  }
});
document.addEventListener('DOMContentLoaded', function () {
  let darkmode = localStorage.getItem('darkmode');
  const themeSwitch = document.getElementById('theme-switch');

  const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
  };

  const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
  };

  if (darkmode === "active") enableDarkmode();

  if (themeSwitch) {
    themeSwitch.addEventListener("click", () => {
      darkmode = localStorage.getItem('darkmode');
      darkmode !== "active" ? enableDarkmode() : disableDarkmode();
    });
  }
});
