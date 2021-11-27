import { basePage } from './basePage'
import { browser, element, by, ExpectedConditions } from 'protractor'
export class mainPage extends basePage { 

    async getMainPage() {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize()
        browser.get('https://www.epicgames.com/store/ru/');
        await browser.sleep(10000)
    }

    searchField() {
        return element(by.css('.css-w7sedp'))
    }
    
    searchResultsDropDown() {
        return element(by.css('.css-1wqu3mc'))
    }
    searchResultsArray() {
        return element.all(by.css('.css-1wqu3mc li'))
    }

    rdr2() {
        return element(by.xpath('/html/body/div[1]/div/div[4]/main/div[1]/div/div[1]/div/div/div[2]/div[2]/div/span/div/ul/li[3]/a'))
    }


    async fillSearchField(text: string) {
        await this.waitElementVisible(this.searchField())
        this.searchField().sendKeys(text)
    }

    async clearSearchField() {
        await this.waitElementVisible(this.searchField())
        this.searchField().clear()
    }

    async SearchResults() {
        await this.waitElementVisible(element(by.css('.css-1wqu3mc li'))) 
        return this.searchResultsArray()
    }

    async chooseRdr2fromSearchResults() {
        await this.waitElementVisible(this.rdr2())
        this.rdr2().click()
    }
}