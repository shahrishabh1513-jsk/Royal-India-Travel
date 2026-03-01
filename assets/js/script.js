// Custom cursor
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  follower.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
});

document.addEventListener('mouseenter', () => {
  cursor.style.opacity = '1';
  follower.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
  cursor.style.opacity = '0';
  follower.style.opacity = '0';
});

// Navbar toggle
const navOpenBtn = document.querySelector('[data-nav-open-btn]');
const navbar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]');
const navLinks = document.querySelectorAll('[data-nav-link]');

if (navOpenBtn) {
  navOpenBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
  });
}

if (overlay) {
  overlay.addEventListener('click', () => {
    navbar.classList.remove('active');
    overlay.classList.remove('active');
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    overlay.classList.remove('active');
  });
});

// Header scroll effect
const header = document.querySelector('[data-header]');
const goTopBtn = document.querySelector('[data-go-top]');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
    goTopBtn.classList.add('active');
  } else {
    header.classList.remove('scrolled');
    goTopBtn.classList.remove('active');
  }
});

// Generate destination cards
const destinations = [
  { name: 'Dwarka', location: 'Gujarat', image: './assets/images/dearka.jpg', price: 12999, rating: 4.8 },
  { name: 'Somnath', location: 'Gujarat', image: './assets/images/somnath.jpg', price: 9999, rating: 4.7 },
  { name: 'Kutch', location: 'Gujarat', image: './assets/images/kutch.jpg', price: 24999, rating: 4.9 },
  { name: 'Udaipur', location: 'Rajasthan', image: './assets/images/udaipur.jpg', price: 15999, rating: 4.8 },
  { name: 'Jaisalmer', location: 'Rajasthan', image: './assets/images/jaisalmer.jpg', price: 18999, rating: 4.8 },
  { name: 'Jaipur', location: 'Rajasthan', image: './assets/images/jaipur.jpg', price: 13999, rating: 4.7 },
  { name: 'Mount Abu', location: 'Rajasthan', image: './assets/images/mount-abu.jpg', price: 11999, rating: 4.6 },
  { name: 'Statue of Unity', location: 'Gujarat', image: './assets/images/statue-of-unity.jpg', price: 8999, rating: 4.9 }
];

const destinationsGrid = document.getElementById('destinationsGrid');
if (destinationsGrid) {
  destinations.slice(0, 6).forEach((dest, index) => {
    const card = document.createElement('div');
    card.className = 'destination-card';
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
      <div class="destination-image">
        <img src="./assets/images/${dest.image}" alt="${dest.name}">
      </div>
      <div class="destination-content">
        <div class="destination-rating">${'⭐'.repeat(Math.floor(dest.rating))} ${dest.rating}</div>
        <h3 class="destination-title">${dest.name}</h3>
        <div class="destination-location">
          <ion-icon name="location-outline"></ion-icon>
          <span>${dest.location}</span>
        </div>
        <div class="destination-price">₹${dest.price.toLocaleString()} <span>/person</span></div>
      </div>
    `;
    card.onclick = () => alert(`✨ Explore ${dest.name} with our special packages!`);
    destinationsGrid.appendChild(card);
  });
}

// Generate packages
const packages = [
  { name: 'Dwarka & Somnath Pilgrim', location: 'Gujarat', image: 'dwarka-somnath.jpg', days: 4, nights: 3, price: 12999, tag: 'Spiritual' },
  { name: 'Rann Utsav Special', location: 'Kutch', image: 'kutch-rann.jpg', days: 6, nights: 5, price: 24999, tag: 'Festival' },
  { name: 'Royal Rajasthan Circuit', location: 'Jaipur, Jaisalmer, Udaipur', image: 'rajasthan-royal.jpg', days: 9, nights: 8, price: 38999, tag: 'Luxury' },
  { name: 'Statue of Unity & Saputara', location: 'Gujarat', image: 'statue-saputara.jpg', days: 3, nights: 2, price: 8999, tag: 'Weekend' }
];

const packagesGrid = document.getElementById('packagesGrid');
if (packagesGrid) {
  packages.forEach((pkg, index) => {
    const card = document.createElement('div');
    card.className = 'package-card';
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
      <div class="package-image">
        <img src="./assets/images/${pkg.image}" alt="${pkg.name}">
      </div>
      <div class="package-content">
        <span class="package-tag">${pkg.tag}</span>
        <h3 class="package-title">${pkg.name}</h3>
        <div class="package-duration">
          <ion-icon name="time-outline"></ion-icon>
          <span>${pkg.days}D / ${pkg.nights}N</span>
        </div>
        <div class="package-features">
          <span class="package-feature">🏨 Hotel</span>
          <span class="package-feature">🚗 Transfer</span>
          <span class="package-feature">🎫 Guide</span>
        </div>
        <div class="package-footer">
          <div class="package-price">₹${pkg.price.toLocaleString()} <span>/person</span></div>
          <button class="btn btn-primary" onclick="bookPackage('${pkg.name}')">Book</button>
        </div>
      </div>
    `;
    packagesGrid.appendChild(card);
  });
}

// Generate gallery
const galleryImages = ['gallery-1.jpg', 'gallery-2.jpg', 'gallery-3.jpg', 'gallery-4.jpg', 'gallery-5.jpg'];
const galleryGrid = document.getElementById('galleryGrid');
if (galleryGrid) {
  galleryImages.forEach((img, index) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `
      <img src="./assets/images/${img}" alt="Gallery ${index + 1}">
      <div class="gallery-overlay">
        <span>View Photo</span>
      </div>
    `;
    item.onclick = () => alert(`📸 Photo ${index + 1} - Beautiful capture from our travelers`);
    galleryGrid.appendChild(item);
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Package booking function
window.bookPackage = (packageName) => {
  alert(`✨ Thank you for choosing "${packageName}"! Our travel expert will contact you within 30 minutes with special offers.`);
};

// Newsletter subscription
window.subscribeNewsletter = () => {
  alert('📧 Thanks for subscribing! You\'ll receive exclusive travel deals.');
};