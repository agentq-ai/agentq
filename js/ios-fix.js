// iOS Safari fix for navbar toggle
document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on iOS
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (isIOS) {
    // Find the navbar toggle button
    const toggleButton = document.querySelector('.navbar__toggle');

    if (toggleButton) {
      // Create a transparent overlay for better touch detection
      const overlay = document.createElement('div');
      overlay.style.position = 'absolute';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '60px';
      overlay.style.height = '60px';
      overlay.style.zIndex = '10000';
      overlay.style.cursor = 'pointer';

      // Insert the overlay before the toggle button
      toggleButton.parentNode.insertBefore(overlay, toggleButton);

      // Add click event to the overlay
      overlay.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        // Trigger a click on the actual toggle button
        toggleButton.click();
      });

      // Also improve the original toggle button
      toggleButton.addEventListener('touchstart', function(e) {
        e.stopPropagation();
      }, { passive: false });

      toggleButton.addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.click();
      }, { passive: false });

      // Fix logo positioning
      const logo = document.querySelector('.navbar__logo');
      if (logo) {
        logo.style.marginLeft = '50px';
        logo.style.position = 'relative';
        logo.style.zIndex = '5';
      }
    }
  }

  // For all mobile devices, ensure proper positioning
  if (window.innerWidth < 996) {
    const logo = document.querySelector('.navbar__logo');
    if (logo && !isIOS) {
      logo.style.marginLeft = '40px';
      logo.style.position = 'relative';
      logo.style.zIndex = '5';
    }
  }
});
