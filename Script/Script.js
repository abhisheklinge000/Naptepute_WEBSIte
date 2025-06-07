src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"

  window.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('landingAudio');
    document.body.addEventListener('click', function () {
      audio.play().catch((e) => {
        console.log('Audio play failed:', e);
      });
    }, { once: true });
  });
