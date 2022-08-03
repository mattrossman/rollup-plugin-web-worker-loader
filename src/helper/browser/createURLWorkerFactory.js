export function createURLWorkerFactory(url, basePath) {
    return function WorkerFactory(options, basePathOverride) {
        let workerUrl;
        try {
            workerUrl = new URL(url, basePathOverride ?? basePath).toString();
        } catch (e) {
            workerUrl = new URL(
                (basePathOverride ?? basePath) + "/" + url,
                window.location.origin
            ).toString();
        }
        return new Worker(workerUrl, options);
    };
}
