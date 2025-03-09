import Lenis from '@studio-freight/lenis';

export default () => { 
    const lenis = new Lenis({
        lerp: 0.1,  
        duration: 1.2,
        smoothWheel: true
    });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

}