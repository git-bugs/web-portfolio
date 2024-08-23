import gsap from 'gsap';

const tl = gsap.timeline({ paused: true });

export const menuAnimation = tl.from('.nav', {
  delay: 0.4,
  y: -50,
});
