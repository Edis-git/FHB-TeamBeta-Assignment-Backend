export default {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
};
