import { gamePersonalPage } from '../PO/gamePersonalPage'
import { mainPage } from '../PO/mainPage'
import { authorizePage } from '../PO/authorizePage'

describe('epicgames store e2e test', function () {

  let page = new mainPage
  let rdr2Page = new gamePersonalPage
  let authPage = new authorizePage
  
  it('give search results for text "red" ', async function () {
    await page.getMainPage()
    await page.fillSearchField('red')
    let searchResult = await page.SearchResults()
    expect(searchResult.length).toBeGreaterThan(0)
  })
  it('give no search results after clearing search field', async function () {
    await page.clearSearchField()
    let clearResult = await page.SearchResults()
    expect(clearResult.length).toBe(0)
  })
  it('choosing rdr2 leads to the appearance of an overlay and disappearance of dropdown', async function () {
    await page.fillSearchField('red')
    await page.chooseRdr2fromSearchResults()
    expect(await rdr2Page.isAlertOverlayPresented()).toBeTruthy
    expect(page.searchResultsDropDown().isPresent).toBeFalsy
  })
  it('click on "Продолжить" leads to disappearance of overlay', async function () {
    await rdr2Page.buttonNextClick()
    expect(rdr2Page.alertOverlay().isPresent).toBeFalsy
  })
  it('click on add to wishlist leads to authorization page with "Enter by Apple ID" option', async function () {
    await rdr2Page.addToWishlistClick()
    expect(await authPage.isAppleAuthButtonisPresent()).toBeTruthy
  });
});