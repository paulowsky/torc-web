import { Page } from '../_page'

export class FootballHomePage extends Page {
  constructor() {
    super({ baseUrl: Cypress.env('FOOTBALL_BASE_URL'), path: '/' })
  }

  prepare() {
    cy.origin(this.baseUrl, () => {
      cy.on('uncaught:exception', () => {
        return false
      })
    })
  }

  load() {
    cy.origin(this.baseUrl, { args: { url: this.url } }, ({ url }) => {
      cy.url().should('include', url)
    })
  }
}

export default new FootballHomePage()
