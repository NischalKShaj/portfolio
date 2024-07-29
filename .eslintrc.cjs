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
    // Disable all rules by setting them to "off"
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": "off",
    // Add other rules you want to disable here
    "no-unused-vars": "off",
    "no-console": "off",
    "no-debugger": "off",
    "no-undef": "off",
    "no-redeclare": "off",
    "no-alert": "off",
    // Add other rules you want to disable here
  },
};
