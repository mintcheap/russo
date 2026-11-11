// Lists every phrase the app speaks, with its audio file name.
// Usage: node build-audio.js > audio-list.tsv   (then generate MP3s with edge-tts, see README)
const fs = require("fs");
const vm = require("vm");
const html = fs.readFileSync(__dirname + "/app.html", "utf8");
const start = html.indexOf("const DECKS = [");
const end = html.indexOf("// ---------- State & persistence");
const ctx = {};
vm.createContext(ctx);
vm.runInContext(html.slice(start, end) + "\nthis.CARDS = CARDS; this.EXERCISES = EXERCISES; this.audioKey = audioKey;", ctx);
const seen = new Map();
for (const c of Object.values(ctx.CARDS)) seen.set(ctx.audioKey(c.say), c.say);
for (const e of ctx.EXERCISES) for (const it of e.items) for (const s of [it.say, it.sayAfter]) if (s && /[а-яё]/i.test(s)) seen.set(ctx.audioKey(s), s);
for (const [k, s] of seen) console.log(k + "\t" + s);
