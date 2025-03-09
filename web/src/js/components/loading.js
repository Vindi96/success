export default () => {
    function checkLoaded() {
      const doms = document.querySelectorAll("[data-fadein]");
      const w = window.innerHeight;
      const offset = 100;
      for (const dom of doms) {
        const rect = dom.getBoundingClientRect();
        if (rect.y < w - offset) {
          dom.classList.add("active");
        } else {
          if (parseInt(dom.getAttribute("data-once")) !== 1) {
            dom.classList.remove("active");
          }
        }
      }
    }
  
    window.setTimeout(() => {
      checkLoaded();
      window.addEventListener("scroll", () => {
        checkLoaded();
      });
    }, 500);
  
    window.addEventListener("load", () => {
      checkLoaded();
    });
};
  