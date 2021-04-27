/**
 * @see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest/presets/default
 */
module.exports = {
    moduleFileExtensions: [
        'js',
        'jsx',
        'json',
        'vue',
        "ts"
    ],
    transform: {
        '^.+\\.vue$': require.resolve('vue-jest'),
        '^.+\\.jsx?$': require.resolve('babel-jest'),
        "^.+\\.tsx?$": require.resolve("ts-jest"),
    },
    transformIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {
        'Components/(.*)$': '<rootDir>/src/components/$1',
        '^__test-utils__/(.)$': '<rootDir>/js/app/__test-utils__/$'
    },
    testMatch: [
        '**/tests/**/**/*.spec.ts',
        '**/tests/**/*.spec.ts',
        '**/__tests__/*.[jt]s?(x)'
    ],
}