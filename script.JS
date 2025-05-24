// AOS Initialization
AOS.init({ duration: 800, once: true });

// Dark Mode Toggle
const toggle = document.getElementById('modeToggle');
const themeIcon = document.getElementById('themeIcon');

function setThemeIcon(isDark) {
  themeIcon.className = isDark ? 'bi bi-moon-fill' : 'bi bi-sun-fill';
}

if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
  toggle.checked = true;
  setThemeIcon(true);
} else {
  setThemeIcon(false);
}

toggle.addEventListener('change', () => {
  const isDarkMode = toggle.checked;
  document.body.classList.toggle('dark-mode', isDarkMode);
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
  setThemeIcon(isDarkMode);
});

// Resume Modal Logic
function openResumeModal() {
  document.getElementById('resumeModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeResumeModal() {
  document.getElementById('resumeModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}
window.addEventListener('click', (e) => {
  if (e.target.id === 'resumeModal') {
    closeResumeModal();
  }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
    }
  });
});

// View More Toggle in Projects
document.querySelectorAll('.view-more-btn').forEach(button => {
  button.addEventListener('click', () => {
    const extra = button.closest('.project-summary').querySelector('.extra-details');
    const visible = extra.style.display === 'block';
    extra.style.display = visible ? 'none' : 'block';
    button.textContent = visible ? 'View More' : 'View Less';
  });
});

// Project Carousel Logic (per project with multiple images)
document.querySelectorAll('.project-carousel').forEach(carousel => {
  const images = carousel.querySelectorAll('.carousel-img');
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');
  let index = 0;

  function showImage(i) {
    images.forEach((img, idx) => {
      img.classList.toggle('active', idx === i);
    });
  }

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.length;
    showImage(index);
  });

  // Auto-slide every 5 seconds
  setInterval(() => {
    index = (index + 1) % images.length;
    showImage(index);
  }, 5000);

  showImage(index); // Initialize on load
});

// Navbar shadow on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  navbar.style.boxShadow = window.scrollY > 50 ? '0 4px 10px rgba(0, 0, 0, 0.1)' : 'none';
});
