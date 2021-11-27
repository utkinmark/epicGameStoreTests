import { Config } from "protractor";
let HtmlReporter = require('protractor-beautiful-reporter')
export const config: Config = {
    framework: 'jasmine', 
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        browserName: "chrome",
        /*chromeOptions: {
            args: [ "--headless", "--window-size=800,600" ]
        }*/
    },
    specs: [
        "tests/*test.js",
    ],
    onPrepare: function() {
        // Add a screenshot reporter and store screenshots to `/Reports/screenshots`:
            jasmine.getEnv().addReporter(new HtmlReporter({
             baseDirectory: 'Reports/screenshots'
          }).getJasmine2Reporter());
       }
};