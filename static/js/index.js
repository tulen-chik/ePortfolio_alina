(function () {
    var text = document.querySelector('.text');
    var paragraph = document.querySelector('.paragragh');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });
  
    observer.observe(text);
    observer.observe(paragragh);
  })();