// Scroll fade-in for gallery items
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.gallery-item').forEach(item => {
  fadeObserver.observe(item);
});

// 037 video: auto pause when scrolled away, auto play when visible
const video037 = document.getElementById('video037');
if (video037) {
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video037.play();
      } else {
        video037.pause();
      }
    });
  }, {
    threshold: 0.3
  });
  videoObserver.observe(video037);
}
