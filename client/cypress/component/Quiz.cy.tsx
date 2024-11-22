import React from 'react'
import { mount } from 'cypress/react18'
import Quiz from '../../src/components/Quiz'

import 'bootstrap/dist/css/bootstrap.min.css'

describe('<Quiz />', () => {
  it('renders and start the quiz', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<Quiz />)

   

   
    cy.get('button').contains('Start Quiz').click()

  
    cy.get('button').contains('1').should('be.visible').click()
    cy.get('button').contains('2').should('be.visible').click()
    cy.get('button').contains('3').should('be.visible').click()
    cy.get('button').contains('4').should('be.visible').click()
    cy.get('button').contains('1').should('be.visible').click()
    cy.get('button').contains('2').should('be.visible').click()
    cy.get('button').contains('3').should('be.visible').click()
    cy.get('button').contains('4').should('be.visible').click()
    cy.get('button').contains('2').should('be.visible').click()
    cy.get('button').contains('3').should('be.visible').click()
  })
})