export const apiHost = () => {
  const host = window.location.hostname;
  if (host === "localhost") {
    return `http://192.168.100.159:8081/api`;
  } else {
    return `https://d3a0qva4kjxuze.cloudfront.net/api`;
  }
};

export default apiHost();
