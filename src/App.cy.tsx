import React from 'react'
import App from './App'
import "./index.css"

describe('<App />', () => {
     it('renders', () => {
          cy.mount(<App />)

          cy.get('[data-testid="email-text"]').should("exist")
          cy.get('[data-testid="password-text"]').should("exist")
          cy.get('[data-testid="submit-btn"]').should("exist")
     })


     it('should validate data', () => {
          cy.mount(<App />)

          cy.get('[data-testid="email-error"]').should("not.exist")
          cy.get('[data-testid="password-error"]').should("not.exist")

          cy.get('[data-testid="email-text"]').type("test")
          cy.get('[data-testid="submit-btn"]').click()

          cy.get('[data-testid="email-error"]').should("exist")
          cy.get('[data-testid="password-error"]').should("exist")
     })
})
