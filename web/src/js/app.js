

import hamburger from "./components/hamburger";
import faq from "./components/faq";
import lazy from "./components/lazy";
import loading from "./components/loading";
import btn from "./components/btn";
import lenis from "./components/lenis";
import scroll from "./components/scroll";


document.addEventListener("DOMContentLoaded", () => {
  
  // flickityFade();
  lazy();
  loading();
  hamburger();
  faq();
  btn();
  lenis();
  scroll();
  
});
