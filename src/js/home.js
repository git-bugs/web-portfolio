import gsap from 'gsap';

const tl = gsap.timeline({ paused: true });

gsap.set('.home-work', { alpha: 0 });

export const homeAnimaton = tl
  .from(
    '.home-image',
    {
      duration: 0.7,
      x: 1000,
    },
    0
  )
  .from(
    '.home-info',
    {
      duration: 0.7,
      left: -1000,
    },
    0
  )
  .to(
    '.home-work',
    {
      delay: 0.4,
      alpha: 1,
    },
    0
  );
