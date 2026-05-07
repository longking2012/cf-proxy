export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // 处理搜索请求，全程走CF代理
    if (url.pathname === "/search") {
      const q = url.searchParams.get("q") || "";
      const targetUrl = `https://www.google.com/search?q=${encodeURIComponent(q)}`;
      
      return fetch(targetUrl, {
        headers: {
          Host: "www.google.com",
          "User-Agent": "Mozilla/5.0"
        }
      });
    }
    
    // 主页显示谷歌首页（走代理）
    return fetch("https://www.google.com", {
      headers: {
        Host: "www.google.com",
        "User-Agent": "Mozilla/5.0"
      }
    });
  }
};
