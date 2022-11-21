import { Container, Flex, Text, useColorMode } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import type { Container as ParticlesContainer, Engine } from 'tsparticles-engine';

const Hero = () => {
  const { t } = useTranslation('hero');
  const { colorMode } = useColorMode();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  // const particlesLoaded = useCallback(async (container: ParticlesContainer | undefined) => {
  //   await console.log(container);
  // }, []);

  return (
    <Flex height='100vh' position='absolute' left={0} right={0} top={0} bottom={0}>
      <Particles
        id='tsparticles'
        init={particlesInit}
        // loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: colorMode === 'dark' ? '#aaa' : '#333',
            },
            links: {
              color: colorMode === 'dark' ? '#aaa' : '#333',
              distance: 150,
              enable: true,
              opacity: 0.05,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.05,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 2, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />
    </Flex>
  );
};

export default Hero;
