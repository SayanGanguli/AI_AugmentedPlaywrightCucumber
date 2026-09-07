module.exports = {
  default: {
    requireModule: ['tsx/cjs'],
    require: ['src/step-definitions/**/*.ts', 'src/hooks/**/*.ts'],
    paths: ['features/**/*.feature'],
    format: ['progress', 'json:reports/cucumber/cucumber.json'],
    timeout: 30000,
    publishQuiet: true
  }
};
