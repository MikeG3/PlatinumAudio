// FULL SCREEN VIEW SCRIPT
const images = document.querySelectorAll('.sampleProjectImage');
const overlay = document.getElementById('imageOverlay');
const overlayImg = document.getElementById('overlayImage');

// Open image
images.forEach(img => {
  img.addEventListener('click', () => {
    overlay.style.display = 'flex';
    overlayImg.src = img.src;
  });
});

// Close on click anywhere
overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
});