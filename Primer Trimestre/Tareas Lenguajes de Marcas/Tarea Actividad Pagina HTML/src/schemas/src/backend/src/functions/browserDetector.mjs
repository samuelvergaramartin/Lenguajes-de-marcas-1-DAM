const browserDetector = () => {
    if (navigator.userAgent.indexOf("Firefox") !== -1) {
        return "Firefox";
      } else if (navigator.userAgent.indexOf("Chrome") !== -1) {
        return "Chrome";
      } else if (navigator.userAgent.indexOf("Safari") !== -1) {
        return "Safari";
      } else {
        return "Distinto de 'Chrome', 'Firefox' y 'Safari'"
      }
}

export { browserDetector };