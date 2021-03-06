
const BROWSERS = {
    chrome: [{
        'browserName': 'chrome',
        'bstack:options': {
            'os': 'OS X',
            'osVersion': 'Catalina',
            'resolution': '1600x1200',
            'debug' : 'true',
            'projectName' : 'NEST',
            'consoleLogs' : 'verbose',
            'networkLogs': 'true',
            "seleniumVersion" : "3.141.59"
        },
        'goog:chromeOptions': {
            args: [
                '--start-maximized',
                '--incognito',
                '--start-fullscreen',
                '--enable-features=NetworkService,NetworkServiceInProcess',
            ]},
    }],
    headlessChrome: [{
        'browserName': 'chrome',
        'browserstack.selenium_version' : '3.141.59',
        'bstack:options': {
            os: 'OS X',
            osVersion: 'Catalina',
            resolution: '1600x1200',
            debug : 'true',
            projectName : 'category-ui',
            consoleLogs : 'disable',
            networkLogs: 'false',
            idleTimeout : 300,
        },
        'chromeOptions': {
            args: [
                '--headless',
                '--no-sandbox',
            ]},
    }],
    chromewindows: [{
        'browserName': 'chrome',
        'browserstack.selenium_version' : '3.141.59',
        'bstack:options': {
            os : 'Windows',
            osVersion : '10',
            resolution: '1600x1200',
            networkLogs: 'false',
            debug : 'true',
            projectName : 'category-ui',
            consoleLogs : 'disable',
            idleTimeout : 300,
        },
        'chromeOptions': {
            args: [
                '--start-maximized',
                '--incognito',
            ]},
    }],
    chromeJSOff: [{
        'browserName': 'chrome',
        'browserstack.selenium_version' : '3.141.59',
        'bstack:options': {
            os: 'OS X',
            osVersion: 'Catalina',
            resolution: '1600x1200',
            networkLogs: 'false',
            debug : 'true',
            projectName : 'category-ui',
            consoleLogs : 'disable',
            idleTimeout : 300,
        },
        'chromeOptions': {
            args: [
                '--start-maximized',
                '--incognito',
            ],
            prefs: {
                'profile.managed_default_content_settings.javascript': 2,
            },
        },
    }],
    firefox: [{
        'browserName' : 'Firefox',
        // 'browserstack.selenium_version' : '3.141.59',
        'bstack:options' : {
            os : 'OS X',
            osVersion : 'Catalina',
            resolution : '1600x1200',
            projectName : 'category-ui',
            networkLogs: 'false',
            debug : 'true',
            consoleLogs : 'disable',
            idleTimeout : 300,
        },
    }],
    safari: [{
        'browserName' : 'Safari',
        'browserstack.selenium_version' : '3.141.59',
        'bstack:options' : {
            os : 'OS X',
            osVersion : 'Mojave',
            resolution : '1920x1080',
            projectName : 'category-ui',
            debug : 'true',
            networkLogs : 'false',
            consoleLogs : 'disable',
            idleTimeout : 300,
            safari : {
                enablePopups : 'true',
                allowAllCookies : 'true',
            },
        },
    }],
    edge_16: [{
        'browserName' : 'Edge',
        'browserstack.selenium_version' : '3.141.59',
        'browserVersion' : '16.0',
        'enablePopups': 'true',
        'bstack:options' : {
            os : 'Windows',
            osVersion : '10',
            resolution : '1920x1080',
            projectName : 'category-ui',
            debug : 'true',
            networkLogs : 'false',
            consoleLogs : 'disable',
            idleTimeout : 300,
        },
    }],
    edge_18: [{
        'browserName' : 'Edge',
        'browserstack.selenium_version' : '3.141.59',
        'browserVersion' : '18.0',
        'enablePopups': 'true',
        'bstack:options' : {
            os : 'Windows',
            osVersion : '10',
            resolution : '1920x1080',
            projectName : 'category-ui',
            debug : 'true',
            networkLogs : 'false',
            consoleLogs : 'disable',
            idleTimeout : 300,
        },
    }],
    edge_80: [{
        'browserName' : 'Edge',
        'browserstack.selenium_version' : '3.141.59',
        'browserVersion' : '80.0',
        'enablePopups': 'true',
        'bstack:options' : {
            os : 'Windows',
            osVersion : '10',
            resolution : '1920x1080',
            projectName : 'category-ui',
            debug : 'true',
            networkLogs : 'false',
            consoleLogs : 'disable',
            idleTimeout : 300,
        },
    }],
    ie: [{
        'browserName' : 'IE',
        'browserVersion' : '11.0',
        'browserstack.selenium_version' : '3.141.59',
        'bstack:options' : {
            os : 'Windows',
            osVersion : '10',
            projectName : 'category-ui',
            debug : 'true',
            resolution : '1920x1080',
            networkLogs : 'false',
            consoleLogs : 'disable',
            idleTimeout : 900,
            ie : {
                noFlash : 'true',
                driver : '3.141.59',
                enablePopups : 'true',
            },
        },
    }],
    android: [{
        'browserstack.appium_version': '1.15.0',
        'bstack:options' : {
            osVersion : '9.0',
            deviceName : 'Google Pixel 3a XL',
            realMobile : 'true',
            projectName : 'category-ui',
            debug : 'true',
            networkLogs : 'disable',
            idleTimeout : 300,
        },
    }],
    iphone: [{
        'browserstack.appium_version': '1.14.0',
        'browserstack.safari.enablePopups' : 'true',
        'handlesAlerts' : 'true',
        'autoAcceptAlerts': 'true',
        'unexpectedAlertBehaviour': 'Allow',
        'bstack:options' : {
            osVersion : '13',
            deviceName : 'iPhone 11 Pro Max',
            realMobile : 'true',
            projectName : 'category-ui',
            debug : 'true',
            networkLogs : 'false',
            consoleLogs : 'disable',
            idleTimeout : 300,
        },
    }],
    ipad: [{
        'browserstack.appium_version' : '1.14.0',
        'browserstack.safari.enablePopups' : 'true',
        'handlesAlerts' : 'true',
        'bstack:options' : {
            osVersion : '13',
            deviceName : 'iPad Pro 12.9 2018',
            realMobile : 'true',
            projectName : 'category-ui',
            debug : 'true',
            networkLogs : 'false',
            consoleLogs : 'disable',
            idleTimeout : 300,
        },
    }],
};

module.exports.DEFAULT_BROWSERLIST = BROWSERS;
