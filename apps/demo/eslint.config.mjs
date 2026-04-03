import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        plugins: {
            "@limegrass/import-alias": (await import("@limegrass/eslint-plugin-import-alias"))
                .default,
        },
        rules: {
            "@limegrass/import-alias/import-alias": [
                "error",
                {
                    relativeImportOverrides: [{ path: ".", depth: 0 }],
                },
            ],
        },
    },
];

export default eslintConfig;
