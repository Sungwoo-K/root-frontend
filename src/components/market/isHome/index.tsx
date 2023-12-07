export const isHome = () => {
  const goHome = window.location.hostname;

  if (goHome === "localhost") {
    return `http://${goHome}:5000`;
  } else {
    return `https://${goHome}`;
  }
};

export default isHome();
