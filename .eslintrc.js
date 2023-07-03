module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:prettier/recommended'],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs,ts}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['prettier'],
    rules: {
        'no-console': 'off',
        'no-unused-vars': 'off'
    }
};
