window.addEventListener('scroll', function() {
    const leftBody = document.querySelector('.left-body');
    const rightBody = document.querySelector('.right-body');
    const scrollY = window.scrollY;


    leftBody.style.transform = `translateX(${scrollY * 0.1}px)`;
    rightBody.style.transform = `translateX(${-scrollY * 0.1}px)`;

    
    leftBody.style.marginTop = `${Math.max(0, 100 - scrollY * 0.2)}px`;
    rightBody.style.marginTop = `${Math.max(0, 100 - scrollY * 0.2)}px`;
});

let lastScrollTop = 0;

document.addEventListener('scroll', function() {
    const proje1 = document.querySelector('.proje1');
    const proje2 = document.querySelector('.proje2');
    const windowHeight = window.innerHeight;
    
    const proje1Position = proje1.getBoundingClientRect().top;
    const proje2Position = proje2.getBoundingClientRect().top;

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll Down
        if (proje1Position < windowHeight) {
            proje1.classList.add('animate-left', 'visible');
            proje1.classList.remove('reverse-left');
        }
        
        if (proje2Position < windowHeight) {
            proje2.classList.add('animate-right', 'visible');
            proje2.classList.remove('reverse-right');
        }
    } else {
        // Scroll Up
        if (proje1Position > windowHeight) {
            proje1.classList.add('reverse-left');
            proje1.classList.remove('animate-left', 'visible');
        }
        
        if (proje2Position > windowHeight) {
            proje2.classList.add('reverse-right');
            proje2.classList.remove('animate-right', 'visible');
        }
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function upTo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}



document.querySelectorAll('.navli a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});