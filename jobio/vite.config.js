import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/app.css",
                "resources/js/app.js",
                "resources/js/react.jsx",
            ],
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: "0.0.0.0", //DoNotChange!
        server: {
            hmr: {
                host: "0.0.0.0",
            },
        },
        port: 5100,
        watch: {
            usePolling: true, //DoNotChange! Windows WSL2 Support
        },
    },
});
