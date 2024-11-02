module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    // Disable specific ESLint rules
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": "off",
    "no-unused-vars": "off",
    "no-console": "off",
    "no-debugger": "off",
    "no-undef": "off",
    "no-redeclare": "off",
    "no-alert": "off",

    // Ignore unknown properties used by @react-three/fiber
    "react/no-unknown-property": [
      "error",
      {
        ignore: [
          "intensity",
          "groundColor",
          "position",
          "angle",
          "penumbra",
          "castShadow",
          "shadowMapSize",
          "object",
          "rotation",
        ],
      },
    ],
  },
};
