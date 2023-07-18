import { Page } from '../_page'

export class ResultsPage extends Page {
  constructor() {
    super({ path: '/' })

    this.aResultTitle = '[data-testid="result-title-a"]'
  }

  enterFirst() {
    cy.get(this.aResultTitle).should('be.visible')
    cy.get(this.aResultTitle).first().click()
  }
}

export default new ResultsPage()
