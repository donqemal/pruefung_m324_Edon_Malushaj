export default [
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
        },
        rules: {
            "no-unused-vars": "error",
            "prefer-const": "error",
            "eqeqeq": "error",
        },
    },
];
