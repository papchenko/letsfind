"use strict";

// smooth scroll
SmoothScroll({
  animationTime: 1200,
  stepSize: 55,
  accelerationDelta: 30,
  accelerationMax: 2,
  keyboardSupport: true,
  arrowScroll: 50,
  pulseAlgorithm: true,
  pulseScale: 4,
  pulseNormalize: 1,
  touchpadSupport: true,
});

// scrool to blocks
const ssMoveTo = function () {
  const easeFunctions = {
    easeInQuad: function (t, b, c, d) {
      t /= d;
      return c * t * t + b;
    },
    easeOutQuad: function (t, b, c, d) {
      t /= d;
      return -c * t * (t - 2) + b;
    },
    easeInOutQuad: function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    },
    easeInOutCubic: function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    },
  };

  const triggers = document.querySelectorAll(".smoothscroll");

  const moveTo = new MoveTo(
    {
      tolerance: 0,
      duration: 1300,
      easing: "easeInOutCubic",
      container: window,
    },
    easeFunctions
  );

  triggers.forEach(function (trigger) {
    moveTo.registerTrigger(trigger);
  });
};
ssMoveTo();
