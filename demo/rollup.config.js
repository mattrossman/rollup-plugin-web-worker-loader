import webWorker from "rollup-plugin-web-worker-loader";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

/** @type {import('rollup').RollupOptions} */
export default {
    input: "src/index.js",
    output: [
        {
            file: "dist/index.modern.js",
            format: "es",
            globals: null,
        },
    ],
    plugins: [
        webWorker({
            targetPlatform: "browser",
            preserveFileNames: true,
            inline: false,
            outputFolder: "assets",
            external: [],
        }),
        nodeResolve(),
        commonjs(),
    ],
};
