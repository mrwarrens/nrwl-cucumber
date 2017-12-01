// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
require('ts-node/register');
const argv = require('yargs').argv;
const baseUrl = argv['base-url'] || 'http://localhost:4200/';

if(!argv.app) {
  throw new Error('Missing required parameter app: (ng e2e --app=appname)');
}

exports.config = {
  allScriptsTimeout: 11000,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--no-sandbox']
    }
  },
  directConnect: true,
  baseUrl: baseUrl,

  // Specs here are the cucumber feature files
  specs: ['./apps/' + argv.app + '/**/e2e/features/*.feature'],

  // Use a custom framework adapter and set its relative path
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  plugins: [{
    path: 'e2e/core.js'
  }],

  // cucumber command line options
  cucumberOpts: {
    // require step definition files before executing features
    require: ['./apps/' + argv.app + '/**/e2e/steps/**/*.steps.ts'],
    // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    // tags: [],
    // <boolean> fail if there are any undefined or pending steps
    strict: true,
    // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    format: ['json:./e2e/output/' + argv.app + '-results.json'],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    compiler: []
  },

  // Enable TypeScript for the tests
  onPrepare() {
    require('ts-node').register({
      project: './tsconfig.e2e.json'
    });
  }
};
