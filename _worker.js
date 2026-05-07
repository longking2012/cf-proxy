export default {
  async fetch(request) {
    const url = new URL(request.url);

    // 搜索功能
    if (url.pathname === "/search") {
      const q = url.searchParams.get("q") || "";
      return Response.redirect("https://www.google.com/search?q=" + encodeURIComponent(q), 302);
    }

    // 默认打开谷歌主页
    return fetch("https://www.google.com", {
      headers: { Host: "www.google.com" },
    });
  }
};
