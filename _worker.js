export default {
  async fetch(request) {
    return fetch("https://www.google.com", {
      headers: { Host: "www.google.com" }
    });
  }
};
