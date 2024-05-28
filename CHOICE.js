window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var bottomContainer = document.querySelector('.bottom-container');
    var scrollText = document.querySelector('.scroll-text');
    var buttons = document.querySelector('.buttons');
  
    if (scrollPosition > 1600) { // Adjust this value as needed
      bottomContainer.classList.add('scrolled');
      scrollText.classList.add('scrolled');
      buttons.classList.add('scrolled');
    } else {
      bottomContainer.classList.remove('scrolled');
      scrollText.classList.remove('scrolled');
      buttons.classList.remove('scrolled');
    }
  });