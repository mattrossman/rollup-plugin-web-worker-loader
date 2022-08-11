export function createURLWorkerFactory(url, basePath) {
    /**
     * @param {WorkerOptions} workerOptions
     * @param {{ basePath?: string, useObjectUrl?: boolean }} factoryOptions
     */
    return function WorkerFactory(workerOptions, factoryOptions) {
        // Optional defaults
        factoryOptions = Object.assign(
            {
                basePath: undefined,
                useObjectUrl: false,
            },
            factoryOptions
        );

        let workerUrl;
        try {
            workerUrl = new URL(
                url,
                factoryOptions.basePath ?? basePath
            ).toString();
        } catch (e) {
            workerUrl = new URL(
                (factoryOptions.basePath ?? basePath) + "/" + url,
                window.location.origin
            ).toString();
        }

        if (factoryOptions.useObjectUrl) {
            // Workaround for browser security restrictions
            const workerSrc = `importScripts("${workerUrl}")`;
            workerUrl = URL.createObjectURL(new Blob([workerSrc]), {
                type: "text/javascript",
            });
        }
        return new Worker(workerUrl, workerOptions);
    };
}
