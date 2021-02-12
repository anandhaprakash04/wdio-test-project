require('dotenv').config();
// const browsersList = require('./browsers.ts');
const cliargs = require('yargs')
    .default('browserName', 'chrome')
    .argv;
const browserName = cliargs.browserName;

exports.config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    specs: [
        './src/specs/**/*.ts'
    ],
    maxInstances: 10,
    capabilities:
        [
            {
                browserName: 'chrome'
            },
        ],
    logLevel: 'trace',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    // services:
    //   [
    //    ['browserstack',
    //     {
    //       browserstackLocal: true,
    //       browserstackOpts: { key: process.env.BROWSERSTACK_ACCESS_KEY, forceLocal: true },
    //     }
    //     ]
    //   ] ,
    reporters: [
        'spec'
    ],
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 1000000, // For applitools
    },
};
