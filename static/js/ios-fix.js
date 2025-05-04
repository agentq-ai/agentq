// Mobile device fix for navbar toggle
(function() {
  // Wait for React hydration to complete
  function waitForReactHydration(callback) {
    // Check if the page is fully loaded and React has hydrated
    if (document.readyState === 'complete') {
      // Add a small delay to ensure React has fully hydrated
      setTimeout(callback, 500);
    } else {
      // Wait for the page to fully load
      window.addEventListener('load', function() {
        setTimeout(callback, 500);
      });
    }
  }

  // The main function to add our custom toggle button
  function addCustomToggleButton() {
    // Check if we're on a mobile device
    const isMobile = window.innerWidth < 996 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (!isMobile) return;

    // Find the navbar and the original toggle button
    const navbar = document.querySelector('.navbar');
    const originalToggleButton = document.querySelector('.navbar__toggle');

    // Check if our custom button already exists (to avoid duplicates)
    if (document.getElementById('custom-toggle-button')) return;

    if (navbar && originalToggleButton) {
      // Create a completely new toggle button
      const newToggleButton = document.createElement('div');
      newToggleButton.id = 'custom-toggle-button';
      newToggleButton.style.position = 'absolute';
      newToggleButton.style.top = '0';
      newToggleButton.style.left = '0';
      newToggleButton.style.width = '60px';
      newToggleButton.style.height = '60px';
      newToggleButton.style.zIndex = '99999';
      newToggleButton.style.cursor = 'pointer';
      newToggleButton.style.display = 'flex';
      newToggleButton.style.alignItems = 'center';
      newToggleButton.style.justifyContent = 'center';

      // Create hamburger icon
      const hamburgerIcon = document.createElement('div');
      hamburgerIcon.style.width = '30px';
      hamburgerIcon.style.height = '24px';
      hamburgerIcon.style.position = 'relative';

      // Create the three lines of the hamburger
      for (let i = 0; i < 3; i++) {
        const line = document.createElement('div');
        line.style.position = 'absolute';
        line.style.height = '3px';
        line.style.width = '100%';
        line.style.backgroundColor = '#000';
        line.style.left = '0';
        line.style.top = (i * 10) + 'px';
        hamburgerIcon.appendChild(line);
      }

      newToggleButton.appendChild(hamburgerIcon);

      // Add the new button to the navbar
      navbar.appendChild(newToggleButton);

      // Add click event to the new toggle button
      newToggleButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        // Trigger a click on the original toggle button
        originalToggleButton.click();
      });

      // Add touch events for mobile
      newToggleButton.addEventListener('touchstart', function(e) {
        e.stopPropagation();
      }, { passive: false });

      newToggleButton.addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        originalToggleButton.click();
      }, { passive: false });

      // Fix logo positioning
      const logo = document.querySelector('.navbar__logo');
      if (logo) {
        logo.style.marginLeft = '60px';
      }
    }
  }

  // Wait for React hydration before adding our custom button
  waitForReactHydration(addCustomToggleButton);

  // Also handle resize events to ensure our button works after orientation changes
  window.addEventListener('resize', function() {
    // Remove any existing custom button
    const existingButton = document.getElementById('custom-toggle-button');
    if (existingButton) {
      existingButton.remove();
    }

    // Add a new button with the correct positioning
    addCustomToggleButton();
  });
})();
