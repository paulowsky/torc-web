// ***********************************************************
// This file is processed and loaded automatically before
// your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Allure reports generation
import '@shelex/cypress-allure-plugin'

// Adds @cypress/grep library to handle tags in test execution
import registerCypressGrep from '@cypress/grep/src/support'
registerCypressGrep()

import './commands'
