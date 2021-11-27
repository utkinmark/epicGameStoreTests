import {browser, element, by, ExpectedConditions} from 'protractor'
let EC = ExpectedConditions
export class basePage {
    async waitElementVisible(element: any) {
        await browser.wait(EC.visibilityOf(element), 15000)
    }

    async waitToBeClickable(element: any) {
        await browser.wait(EC.elementToBeClickable(element), 15000)
    }
    getTitle() {
        return browser.getTitle()
    }
}