const defaultRules = ["react-app", "eslint:recommended"];

module.exports = {
    parser: "babel-eslint",
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parserOptions: {
        allowImportExportEverywhere: true,
    },
    globals: {
        Package: true,
        $: true,
    },
    plugins: ["prettier", "react"],
    extends: defaultRules,
    rules: {
        "consistent-return": "off",
        "array-callback-return": "off",
        "default-case": "warn",
        "prettier/prettier": [
            "warn",
            {
                singleQuote: true,
                trailingComma: "all",
                printWidth: 120,
                tabWidth: 2,
                arrowParens: "always",
                bracketSpacing: true,
                htmlWhitespaceSensitivity: "css",
                jsxBracketSameLine: false,
                parser: "babel",
                proseWrap: "preserve",
                requirePragma: false,
                semi: true,
                useTabs: false,
            },
        ],
        "react/display-name": 0,
        "react/prop-types": 0,
        "react/no-direct-mutation-state": 0,
        "react/no-find-dom-node": 0,
        "no-console": 0,
        "no-unused-vars": [
            "warn",
            {
                vars: "all",
                args: "after-used",
                ignoreRestSiblings: true,
                varsIgnorePattern: "^_",
            },
        ],
    },
    settings: {
        react: {
            // React version. "detect" automatically picks the version you have installed.
            version: "detect",
        },
    },
};
