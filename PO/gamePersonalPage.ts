import {browser, element, by, ExpectedConditions} from 'protractor'
import { basePage } from './basePage'
export class gamePersonalPage extends basePage {

    alertOverlay() {
        return element(by.css('.css-1hpkump'))
    }
    
    buttonNext() {
        return element(by.css('.css-n9sjaa'))
    }
    
    buttonOverlayNext() {
        return element(by.css('.css-n9sjaa'))
    }

    addToWishlist() {
        return element(by.xpath('/html/body/div[1]/div/div[4]/main/div[2]/div/div/div/div[2]/div[3]/div/div/div/span/div/div[2]/div[3]/div/div/div[3]/div/div/div[3]/button'))
    }

    async buttonNextClick() {
        await this.waitElementVisible(this.buttonNext())
        this.buttonNext().click()
    }
    async isAlertOverlayPresented() {
        await this.waitElementVisible(this.alertOverlay())
        return this.alertOverlay().isPresent
    }
    async addToWishlistClick() {
        await this.waitElementVisible(this.addToWishlist())
        this.addToWishlist().click()
    }

}