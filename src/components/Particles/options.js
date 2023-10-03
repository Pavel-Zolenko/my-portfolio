export const options = {
  particles: {
    number: {
      value: 48,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: ['#2EB67D', '#ECB22E', '#E01E5B', '#36C5F0'],
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 1,
    },
    size: {
      value: { min: 1, max: 5 },
    },
    links: {
      enable: true,
      distance: 150,
      color: '#808080',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: false,
      straight: false,
      outModes: 'out',
    },
  },
  fullScreen: {
    enable: true,
    zIndex: 0,
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'grab',
      },
      onClick: {
        enable: true,
        mode: 'push',
      },
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 1,
        },
      },
      push: {
        quantity: 4,
      },
    },
  },
};
