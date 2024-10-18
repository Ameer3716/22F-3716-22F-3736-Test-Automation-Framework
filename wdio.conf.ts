export const config = {
    runner: 'local',
    specs: [
    
        './features/**/*.feature',
        './features/login.feature',
        './features/shoppingCart.feature'
    ],
    maxInstances: 1,
    capabilities: [
        {
            browserName: 'chrome',
        },
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./step-definitions-folder/**/*.js'],
        ignoreUndefinedDefinitions: false,  // Adjust this path as needed
        backtrace: true,
        requireModule: ['ts-node/register'],
        timeout: 60000,
        ignoreUndefined: true,
        tagsInTitle: true, // Ensure this is correctly set for your tags
        strict: true, 
    },
    reporters: ['spec', ['allure', { outputDir: 'allure-results' }]],
    
};