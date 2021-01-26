module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  }
}
