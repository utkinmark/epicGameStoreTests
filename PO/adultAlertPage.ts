import {browser, element, by, ExpectedConditions} from 'protractor'
import { basePage } from './basePage'

export class adultAlertPage extends basePage {
    alertOverlay() {
        return element(by.css('.css-1hpkump'))
    }
    
    buttonNext() {
        return element(by.css('.css-n9sjaa'))
    }

    async buttonNextClick() {
        await this.waitElementVisible(this.buttonNext())
        this.buttonNext().click()
    }
}