import gsap from 'gsap';

export const loader = gsap.to('.preload-image', {
  y: -50,
  repeat: -1,
  yoyo: true,
});

const tl = gsap.timeline({ paused: true });

export const closeLoader = tl.to('.preloader', {
  yPercent: -100,
});
