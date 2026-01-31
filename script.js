// Initialize Lenis for smooth slow scrolling with easing
const lenis = new Lenis({
    smooth: true,
    lerp: 0.02, // smaller value for slower, smoother scroll (default is 0.1)
    duration: 1.2, // in seconds, slow it down further for a "perfect" controlled scroll
    wheelMultiplier: 0.7, // reduce mousewheel speed, play with value for desired "slowness"
    easing: (t) => 1 - Math.pow(1 - t, 3) // Add cubic easing (easeOutCubic)
  });
  
  // handle frame updates
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf);
  
  // (Optional) Sync Lenis with GSAP's ScrollTrigger if used
  if (window.gsap && window.ScrollTrigger) {
    lenis.on('scroll', ScrollTrigger.update)
  }
  


  gsap.to("[data-speed]", {
    y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window),
    ease: "none",
    scrollTrigger: {
      start: 0,
      end: "max",
      invalidateOnRefresh: true,
      scrub: 0,
    }
  });

