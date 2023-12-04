export const isLocalhost = () => {
  const hostName = window.location.hostname;
  if (hostName === "localhost") return `http://${hostName}:8081/api`;
  else {
    return `https://${hostName}:8081/api`;
  }
};

export default isLocalhost();
