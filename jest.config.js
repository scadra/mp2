/**
 * @see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest/presets/default
*/
module.exports = {
  testMatch: ["**/__tests__/**/*spec.(js|ts|tsx)"],

  moduleFileExtensions: [
    "js",
    "ts",
    "json",
    "vue"
  ],

  moduleNameMapper: {
      "Store(.*)$": "<rootDir>/src/store/$1"
  },

  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.js$": "babel-jest"
  },

  testURL: "http://localhost/",
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testEnvironment: 'node'
}
