export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = "https://www.google.com" + url.pathname + url.search;

    const response = await fetch(target, {
      method: request.method,
      headers: {
        "Host": "www.google.com",
        "User-Agent": "Mozilla/5.0",
        "Accept-Language": "zh-CN,zh;q=0.9"
      },
      redirect: "follow"
    });

    return response;
  }
};
