AOS.init({ duration: 800, once: true });

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

// Resume modal logic
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

// Smooth scroll
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
    }
  });
});

// Project View More toggler
document.querySelectorAll('.view-more-btn').forEach(button => {
  button.addEventListener('click', () => {
    const extra = button.closest('.project-summary').querySelector('.extra-details');
    const visible = extra.style.display === 'block';
    extra.style.display = visible ? 'none' : 'block';
    button.textContent = visible ? 'View More' : 'View Less';
  });
});

// Project carousel logic
const carousels = [
  ['assets/project1a.png', 'assets/project1b.png', 'assets/project1c.jpg'],
  ['assets/project2a.jpg', 'assets/project2b.jpg', 'assets/project2c.jpg']
];

document.querySelectorAll('.project-carousel').forEach((carouselContainer, i) => {
  const img = carouselContainer.querySelector('.carousel-img');
  const prev = carouselContainer.querySelector('.carousel-btn.prev');
  const next = carouselContainer.querySelector('.carousel-btn.next');
  let index = 0;

  function updateImage() {
    img.src = carousels[i][index];
  }

  prev.addEventListener('click', () => {
    index = (index - 1 + carousels[i].length) % carousels[i].length;
    updateImage();
  });

  next.addEventListener('click', () => {
    index = (index + 1) % carousels[i].length;
    updateImage();
  });

  setInterval(() => {
    index = (index + 1) % carousels[i].length;
    updateImage();
  }, 5000);
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});