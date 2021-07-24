module.exports={
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.js?$': 'babel-jest',
      },
    testRegex : './*.test.(js|jsx|ts)',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    snapshotSerializers:["enzyme-to-json/serializer"],
    setupFilesAfterEnv:[ "./src/setupTests.js"],
    moduleNameMapper:{
        "\\.(css|less)$":"./__mocks___/styleMock.js"


    }
}
