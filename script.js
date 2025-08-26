
    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
    
    // Scroll Progress Indicator
    const scrollProgress = document.querySelector('.scroll-progress');
    
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      scrollProgress.style.width = scrollPercent + '%';
      
      // Navbar shadow on scroll
      const navbar = document.getElementById('navbar');
      if (window.pageYOffset > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
      } else {
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
      }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! This is a demo form - no data was sent.');
        this.reset();
      });
    }
    
    // Animation on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.section-title, .skill-card, .project-card, .contact-item');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          element.style.opacity = 1;
          element.style.transform = 'translateY(0)';
        }
      });
    };
    
    // Set initial state for animation
    document.querySelectorAll('.section-title, .skill-card, .project-card, .contact-item').forEach(el => {
      el.style.opacity = 0 ;
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
