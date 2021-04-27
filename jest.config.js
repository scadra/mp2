/**
 * @see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest/presets/default
 */
module.exports = {
    testRegex: "((\\.|/)spec)\\.(jsx?|tsx?)$",
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
    testURL: "http://localhost/"
}