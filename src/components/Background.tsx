'use client';

import type { Engine, ISourceOptions } from '@tsparticles/engine';
import { Particles, ParticlesProvider, useParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from 'next-themes';
import { useMemo, useSyncExternalStore } from 'react';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

const initEngine = async (engine: Engine) => {
  await loadSlim(engine);
};

const subscribeReducedMotion = (onChange: () => void) => {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);

  query.addEventListener('change', onChange);

  return () => query.removeEventListener('change', onChange);
};

const usePrefersReducedMotion = () =>
  useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );

const ParticleField = () => {
  const { loaded } = useParticlesProvider();
  const { resolvedTheme } = useTheme();
  const reducedMotion = usePrefersReducedMotion();

  const color = resolvedTheme === 'light' ? '#333333' : '#aaaaaa';

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: true, zIndex: -1 },
      fpsLimit: 60,
      detectRetina: true,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      interactivity: {
        events: {
          onHover: {
            enable: !reducedMotion,
            mode: 'grab',
            parallax: { enable: !reducedMotion, smooth: 10, force: 15 },
          },
          resize: { enable: true },
        },
        modes: { grab: { distance: 280, links: { opacity: 0.12 } } },
      },
      particles: {
        color: { value: color },
        links: { color, distance: 150, enable: true, opacity: 0.07, width: 1 },
        collisions: { enable: !reducedMotion },
        move: {
          direction: 'none',
          enable: !reducedMotion,
          outModes: { default: 'bounce' },
          random: false,
          speed: 0.8,
          straight: false,
        },
        number: { density: { enable: true, width: 1920, height: 1080 }, value: 80 },
        opacity: { value: 0.07 },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 2 } },
      },
    }),
    [color, reducedMotion],
  );

  if (!loaded) return null;

  return <Particles id='tsparticles' options={options} />;
};

const Background = () => (
  <ParticlesProvider init={initEngine}>
    <ParticleField />
  </ParticlesProvider>
);

export default Background;
