export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = new URL("https://encrypted.google.com" + url.pathname + url.search);
    
    const res = await fetch(target, {
      method: request.method,
      headers: {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "zh-CN,en-US;q=0.7,en;q=0.3",
        "Host": "encrypted.google.com"
      }
    });

    let html = await res.text();
    html = html.replaceAll("encrypted.google.com", url.host);
    html = html.replaceAll("https://encrypted.google.com", "");

    return new Response(html, {
      status: res.status,
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
};
