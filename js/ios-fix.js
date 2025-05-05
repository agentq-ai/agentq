// Mobile device fix for navbar toggle
(function() {
  // Create the button as early as possible, then ensure it's properly positioned
  // after React hydration
  function waitForReactHydration(callback) {
    // Try to create the button immediately if DOM is ready
    if (document.readyState !== 'loading') {
      // Run immediately with a shorter delay
      callback();

      // Also run again after a delay to ensure proper positioning
      setTimeout(callback, 200);
    } else {
      // For very early page load, wait for DOM to be ready
      document.addEventListener('DOMContentLoaded', function() {
        callback();

        // Run again after load to ensure everything is positioned correctly
        window.addEventListener('load', function() {
          setTimeout(callback, 100);
        });
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

  // Function to ensure the button is recreated
  function ensureCustomToggleButton() {
    // Check if we're on a mobile device first
    const isMobile = window.innerWidth < 996 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) return;

    // Check if the navbar exists
    const navbar = document.querySelector('.navbar');
    const originalToggleButton = document.querySelector('.navbar__toggle');
    if (!navbar || !originalToggleButton) return;

    // Check if our custom button already exists
    let existingButton = document.getElementById('custom-toggle-button');

    // If button exists but is not visible or not in the DOM, remove it
    if (existingButton) {
      if (!document.body.contains(existingButton) ||
          existingButton.offsetParent === null) {
        existingButton.remove();
        existingButton = null;
      }
    }

    // Only create a new button if needed
    if (!existingButton) {
      addCustomToggleButton();
    }
  }

  // Wait for React hydration before adding our custom button initially
  waitForReactHydration(addCustomToggleButton);

  // Handle resize events to ensure our button works after orientation changes
  window.addEventListener('resize', ensureCustomToggleButton);

  // Listen for Docusaurus navigation events to handle client-side routing
  document.addEventListener('click', function(e) {
    // Check if the click was on a navigation link
    const link = e.target.closest('a');
    if (link && link.getAttribute('href') && !link.getAttribute('href').startsWith('http')) {
      // This is likely an internal navigation link
      // Add a small delay to ensure the navigation completes
      setTimeout(ensureCustomToggleButton, 300);
    }
  });

  // Additional listener for Docusaurus content changes
  // This uses a MutationObserver to detect DOM changes in the content area
  // Use a debounce mechanism to prevent too many button recreations
  let mutationTimeout;
  const contentObserver = new MutationObserver(function() {
    // Clear any pending timeout
    if (mutationTimeout) {
      clearTimeout(mutationTimeout);
    }

    // Set a new timeout to ensure the button after DOM changes settle
    mutationTimeout = setTimeout(ensureCustomToggleButton, 50);
  });

  // Start observing once the page is loaded
  waitForReactHydration(function() {
    // Only observe the navbar and main content areas
    const navbar = document.querySelector('.navbar');
    const mainContent = document.querySelector('main');

    if (navbar) {
      contentObserver.observe(navbar, {
        childList: true,
        subtree: false,
        attributes: true
      });
    }

    if (mainContent) {
      contentObserver.observe(mainContent, {
        childList: true,
        subtree: false
      });
    }
  });
})();
