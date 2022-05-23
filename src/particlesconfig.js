const particlesConfig = 
{
  background: {
    color: {
      value: "",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,   
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#fff",
    },
    // "z-index": 1,
    links: {
      color: "#fff",
      distance: 180,
      enable: true,
      opacity: 0.3,
      width: 3,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 2,
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
      value: 0.3,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 5,
    },
  },
  detectRetina: true,
}

export default particlesConfig;