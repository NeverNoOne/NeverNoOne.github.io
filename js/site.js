    // Remove the transition class
    var square = null;
    square = document.querySelector(".square");
    square.classList.remove('square-transition');
    
    // Create the observer, same as before:
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          square.classList.add('square-transition');
          return;
        }
    
        square.classList.remove('square-transition');
      });
    });
    
    observer.observe(document.querySelector('.square-wrapper'));