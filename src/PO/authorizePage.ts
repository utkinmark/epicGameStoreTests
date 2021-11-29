import {browser, element, by, ExpectedConditions} from 'protractor'
import { basePage } from './basePage'

export class authorizePage extends basePage {
    appleAuthButton() {
        return element(by.xpath('/html/body/div[3]/div[2]/div/div/div/div/div[1]/ul/div[9]'))
    }

    async isAppleAuthButtonisPresent() {
        await this.waitElementVisible(this.appleAuthButton())
        return this.appleAuthButton().isPresent

    }
}