export default {
  async fetch(request) {
    const url = new URL(request.url);
    const base = "https://www.google.com";
    const target = base + url.pathname + url.search;

    const res = await fetch(target, {
      method: request.method,
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "text/html",
        "Accept-Language": "zh-CN,zh;q=0.9"
      },
      redirect: "follow"
    });

    let html = await res.text();
    html = html.replace(/https:\/\/www\.google\.com/g, "");
    html = html.replace(/www\.google\.com/g, url.host);

    const contentType = res.headers.get("content-type") || "text/html; charset=utf-8";
    return new Response(html, {
      status: res.status,
      headers: { "Content-Type": contentType }
    });
  }
};
