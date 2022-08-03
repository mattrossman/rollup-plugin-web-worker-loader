import WebWorker from "web-worker:./worker.js";

import { message } from "./message";

console.log(message);

const worker = new WebWorker();
worker.postMessage("hello");

export const foo = "bar";
