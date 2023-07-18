import { Page } from '../_page'

export class SearchPage extends Page {
  constructor() {
    super({ path: '/' })

    this.inputSearch = 'input#searchbox_input'
    this.buttonSearch = 'button[type="submit"]'
  }

  search({ text }) {
    cy.get(this.inputSearch).should('be.visible')
    cy.get(this.inputSearch).type(text)
    cy.get(this.buttonSearch).click()
  }
}

export default new SearchPage()
