// Builds index.html for GitHub Pages from app.html (the page body, also published as the Claude artifact).
// Usage: node build-site.js
const fs = require("fs");
const body = fs.readFileSync(__dirname + "/app.html", "utf8");
const html = `<!doctype html>
<html lang="pt-PT">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Russo">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="theme-color" content="#F2F4FA" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0A1130" media="(prefers-color-scheme: dark)">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<link rel="icon" type="image/png" href="icon-512.png">
<link rel="manifest" href="manifest.webmanifest">
<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0;font:14px system-ui,-apple-system,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style>
</head>
<body>
${body}
<script>if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});</script>
</body>
</html>
`;
fs.writeFileSync(__dirname + "/index.html", html);
console.log("index.html written (" + html.length + " bytes)");
