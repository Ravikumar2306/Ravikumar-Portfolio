var navLinks = document.querySelectorAll('.nav-link');

// Loop through each link and add a click event listener
navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    // Remove 'active' class from all links
    navLinks.forEach(function(link) {
      link.classList.remove('active');
      link.style.color = '#222831'; // Revert color to default
    });

    // Add 'active' class to the clicked link
    this.classList.add('active');
    this.style.color = '#179BAE'; // Set active link color

    // If Home link was active, remove the aria-current attribute
    document.querySelector('.nav-link[aria-current="page"]').removeAttribute('aria-current');
  });
});

document.querySelector('.navbar-toggler').addEventListener('click', function() {
  var nav = document.getElementById('navbarNav');
  var container = document.querySelector('.content-wrapper'); // Select the entire content wrapper

  nav.classList.toggle('show'); // Toggle the 'show' class

  if (nav.classList.contains('show')) {
    container.style.top = '100px'; // Move the entire content down
  } else {
    container.style.top = '0'; // Reset the entire content to the top
  }
});


