// export const bgc =
// {
//   "particles": {
//     "number": {
//       "value": 10,
//       "density": {
//         "enable": true,
//         "value_area": 500
//       }
//     },
//     "color": {
//       "value": "#ffffff"
//     },
//     "shape": {
//       "type": "circle",
//       "stroke": {
//         "width": 0,
//         "color": "#000000"
//       },
//       "polygon": {
//         "nb_sides": 5
//       },
//       "image": {
//         "src": "img/github.svg",
//         "width": 100,
//         "height": 100
//       }
//     },
//     "opacity": {
//       "value": 0.5,
//       "random": false,
//       "anim": {
//         "enable": false,
//         "speed": 1,
//         "opacity_min": 0.1,
//         "sync": false
//       }
//     },
//     "size": {
//       "value": 5,
//       "random": false,
//       "anim": {
//         "enable": false,
//         "speed": 80,
//         "size_min": 0.1,
//         "sync": false
//       }
//     },
//     "line_linked": {
//       "enable": true,
//       "distance": 300,
//       "color": "#ffffff",
//       "opacity": 0.4,
//       "width": 2
//     },
//     "move": {
//       "enable": true,
//       "speed": 5,
//       "direction": "none",
//       "random": false,
//       "straight": false,
//       "out_mode": "out",
//       "bounce": true,
//       "attract": {
//         "enable": false,
//         "rotateX": 600,
//         "rotateY": 1200
//       }
//     }
//   },
//   "interactivity": {
//     "detect_on": "window",
//     "events": {
//       "onhover": {
//         "enable": true,
//         "mode": "grab"
//       },
//       "onclick": {
//         "enable": true,
//         "mode": "grab"
//       },
//       "resize": true
//     },
//     "modes": {
//       "grab": {
//         "distance": 200,
//         "line_linked": {
//           "opacity": 1
//         }
//       },
//       "bubble": {
//         "distance": 800,
//         "size": 80,
//         "duration": 2,
//         "opacity": 0.8,
//         "speed": 3
//       },
//       "repulse": {
//         "distance": 400,
//         "duration": 0.4
//       },
//       "push": {
//         "particles_nb": 4
//       },
//       "remove": {
//         "particles_nb": 2
//       }
//     }
//   },
//   "retina_detect": true
// }

export const bgc = {
  background: {
    color: {
      value: '',
    },
    image: '',
    position: '',
    repeat: '',
    size: '',
    opacity: 1,
  },
  backgroundMask: {
    cover: {
      color: {
        value: {
          // r: 200,
          // g: 230,
          // b: 220,
          r: 0,
          g: 0,
          b: 0,
        },
      },
      opacity: 0.4,
    },
    enable: false,
  },
  detectRetina: true,
  fpsLimit: 30,
  infection: {
    cure: false,
    delay: 0,
    enable: false,
    infections: 0,
    stages: [],
  },
  interactivity: {
    detectsOn: 'window',
    events: {
      onClick: {
        enable: false,
        mode: 'push',
      },
      onDiv: {
        ids: ['#root'],
        enable: true,
        mode: [],
        type: 'circle',
      },
      onHover: {
        enable: true,
        mode: 'bubble',
        parallax: {
          enable: false,
          force: 60,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        speed: 1,
      },
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 1,
        size: 10,
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 400,
        links: {
          opacity: 1,
        },
      },
      push: {
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        speed: 1,
      },
      slow: {
        factor: 3,
        radius: 200,
      },
      trail: {
        delay: 1,
        quantity: 1,
      },
    },
  },
  particles: {
    collisions: {
      enable: false,
      mode: 'bounce',
    },
    color: {
      value: '#ffffff',
      animation: {
        enable: false,
        speed: 1,
        sync: true,
      },
    },
    links: {
      blink: false,
      color: {
        value: '#ffffff',
      },
      consent: false,
      distance: 150,
      enable: true,
      opacity: 1,
      shadow: {
        blur: 5,
        color: {
          value: '#00ff00',
        },
        enable: false,
      },
      triangles: {
        enable: false,
      },
      width: 1,
      warp: false,
    },
    move: {
      angle: 90,
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      direction: 'none',
      enable: true,
      noise: {
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
        },
        enable: false,
      },
      outMode: 'out',
      random: false,
      speed: 2,
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fillColor: {
          value: '#000000',
        },
      },
      vibrate: false,
      warp: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000,
      },
      limit: 0,
      value: 30,
    },
    opacity: {
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 1,
        sync: false,
      },
      random: {
        enable: false,
        minimumValue: 1,
      },
      value: 1,
    },
    rotate: {
      animation: {
        enable: false,
        speed: 0,
        sync: false,
      },
      direction: 'clockwise',
      path: false,
      random: false,
      value: 0,
    },
    shadow: {
      blur: 0,
      color: {
        value: '#000000',
      },
      enable: false,
      offset: {
        x: 0,
        y: 0,
      },
    },
    shape: {
      options: {
        polygon: {
          nb_sides: 5,
        },
        star: {
          nb_sides: 5,
        },
        image: {
          src: 'https://cdn.matteobruni.it/images/particles/github.svg',
          width: 100,
          height: 100,
        },
        images: {
          src: 'https://cdn.matteobruni.it/images/particles/github.svg',
          width: 100,
          height: 100,
        },
      },
      type: 'circle',
    },
    size: {
      animation: {
        destroy: 'none',
        enable: false,
        minimumValue: 0.1,
        speed: 40,
        startValue: 'max',
        sync: false,
      },
      random: {
        enable: false,
        minimumValue: 1,
      },
      value: 30,
    },
    stroke: {
      width: 0,
      color: {
        value: '#000000',
        animation: {
          enable: false,
          speed: 1,
          sync: true,
        },
      },
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
    },
  },
  pauseOnBlur: true,
};
