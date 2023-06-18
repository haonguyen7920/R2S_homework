function go(options) {
  let {
    speed = 4,

    enable: {
      hyperdrive = false,

      frobnifier = true,
    },
  } = options;

  console.log(
    "speed=",
    speed,

    "hyperdrive:",
    hyperdrive,

    "frobnifier:",
    frobnifier
  );
}

const optionsParam = {
  speed: 4,
  enable: {
    hyperdrive: false,
    frobnifier: true,
  },
};

go(optionsParam);
