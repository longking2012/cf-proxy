export default {
  async fetch(request) {
    const url = new URL(request.url);
    const upstream = "https://www.google.com";
    
    const fetchOpts = {
      method: request.method,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*",
      },
      redirect: "follow",
    };

    const res = await fetch(upstream + url.pathname + url.search, fetchOpts);
    
    let html = await res.text();
    html = html.replaceAll("https://www.google.com", "");
    html = html.replaceAll("www.google.com", url.host);

    return new Response(html, {
      status: res.status,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }
};
