import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback } from 'react';
import { options } from './options';

export const ParticlesBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return <Particles options={options} init={particlesInit} />;
};
