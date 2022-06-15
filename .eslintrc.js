module.exports = {
  extends: [
    "plugin:@next/next/recommended",
    "@react-ddd",
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    "jsx-a11y/label-has-associated-control": [ 2, {
      "assert": "either",
    }]
  }
};