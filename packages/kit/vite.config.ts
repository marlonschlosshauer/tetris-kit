import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

const isWatch = process.argv.includes("--watch");

export default defineConfig({
    plugins: [react(), ...(!isWatch ? [dts({ rollupTypes: true })] : [])],
    build: {
        lib: {
            entry: "src/index.ts",
            formats: ["es"],
            fileName: "index",
            cssFileName: "layout",
        },
        rollupOptions: {
            external: ["react", "react-dom", "react/jsx-runtime"],
            output: {
                banner: '"use client";',
            },
        },
    },
});
