export default {
  async fetch(request) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q") || "";

    let html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Search</title>
<style>
*{box-sizing:border-box}
body{margin:0;padding:60px 20px;text-align:center;font-family:Arial,sans-serif}
input{
  width:100%;max-width:480px;
  padding:14px 22px;
  border:1px solid #ddd;
  border-radius:24px;
  font-size:16px;
  outline:none;
}
form{margin-top:30vh}
</style>
</head>
<body>
<form action="/">
  <input type="text" name="q" value="${q}" placeholder="搜索..." autocomplete="off">
</form>
${q ? `<p style="margin-top:20px">你搜索的内容：<b>${q}</b></p>` : ""}
</body>
</html>
    `;

    return new Response(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
};
