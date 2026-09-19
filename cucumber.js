module.exports = {
  default: {
    requireModule: ['tsx/cjs'],
    require: ['src/step-def/**/*.ts', 'src/supports/**/*.ts'],
    paths: ['features/**/*.feature'],
    format: ['progress', 'html:reports/cucumber/index.html', 'json:reports/cucumber/cucumber.json'],
    timeout: 30000,
    publishQuiet: true
  }
};
