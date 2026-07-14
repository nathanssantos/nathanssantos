'use client';

import { useTheme } from 'next-themes';
import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

const Background = () => {
  const { resolvedTheme } = useTheme();
  const particleColor = resolvedTheme === 'light' ? '#333' : '#aaa';

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className='absolute inset-0'>
      <Particles
        id='tsparticles'
        init={particlesInit}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'grab',
                parallax: { enable: true, smooth: 10, force: 15 },
              },
              resize: true,
            },
            modes: { grab: { distance: 300, line_linked: { opacity: 0.075 } } },
          },
          particles: {
            color: { value: particleColor },
            links: {
              color: particleColor,
              distance: 150,
              enable: true,
              opacity: 0.075,
              width: 1,
            },
            collisions: { enable: true },
            move: {
              direction: 'none',
              enable: true,
              outModes: { default: 'bounce' },
              random: false,
              speed: 1,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 100 },
            opacity: { value: 0.075 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Background;
