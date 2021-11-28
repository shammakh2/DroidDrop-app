module.exports = {
    root: true,
    extends: ["airbnb", "plugin:prettier/recommended"],
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": ["error"]
    },
    settings: {
        "react": {
          "version": "17.0"
        }
    }
};
