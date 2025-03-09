export default () => {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".navbar__menu--mobile");
  
    const toggleMobileMenu = () => {
      hamburger.classList.toggle("is-active");
      if (mobileMenu.classList.contains("is-active")) {
        mobileMenu.classList.add("fadeOutSlide");
        setTimeout(() => {
          mobileMenu.classList.remove("is-active");
          mobileMenu.classList.remove("fadeOutSlide");
        }, 200); 
      } else {
        mobileMenu.classList.add("is-active", "fadeInSlide");
      }
    };
  
    if (hamburger) {
      hamburger.addEventListener("click", toggleMobileMenu);
    }
  };
  