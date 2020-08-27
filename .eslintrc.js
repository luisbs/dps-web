module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  sourceType: "module",
    ecmaFeatures: {
      jsx: true,
  },
  env: {
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/vue",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
}
