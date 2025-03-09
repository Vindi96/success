import LazyLoad from "vanilla-lazyload";

let lazyLoadInst = null;

export default () => {
  if (!lazyLoadInst) {
    lazyLoadInst = new LazyLoad({
      'elements_selector': '.lazy',
      'threshold': 0,
    });
  }
  lazyLoadInst.update();
  window.addEventListener('ajaxupdated', () => {
    lazyLoadInst.update();
    console.log('hello')
  });
}
