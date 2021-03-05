module.exports = {
  extends: [
    "react-app",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "no-console": "error",
    "@typescript-eslint/explicit-function-return-type ": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
  },
};
