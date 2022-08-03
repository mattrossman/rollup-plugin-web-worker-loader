import WebWorker from "web-worker:./worker.js";

// With base
const loadPathA = new URL("dist/assets/", window.location.origin).toString();

// Without base
const loadPathB = "dist/assets";

// Trailing slash
const loadPathC = "dist/assets/";

const worker = new WebWorker(null, loadPathA);
worker.postMessage("hello");

export const foo = "bar";
