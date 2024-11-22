
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


// import React from 'react'
// import { mount } from 'cypress/react18'
// import Quiz from '../../src/components/Quiz'
// import questions from '../fixtures/questions.json'

// import 'bootstrap/dist/css/bootstrap.min.css'

// describe('<Quiz />', () => {
//   it('should start the quiz and display multiple choice questions', () => {
//     // Step 1: Mount the Quiz component with mock data
//     mount(<Quiz />)

//     // Step 2: Mock the questions state
//     cy.window().then((win) => {
//       win.eval(`window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function (renderer) {
//         const originalMount = renderer.Mount;
//         renderer.Mount = function (element, container, callback) {
//           if (element.type.name === 'Quiz') {
//             element.props.questions = ${JSON.stringify(questions)};
//           }
//           return originalMount(element, container, callback);
//         };
//       };`);
//     });

//     // Step 3: Verify that the "Start Quiz" button is visible
//     cy.get('button').contains('Start Quiz').should('be.visible')

//     // Step 4: Click the "Start Quiz" button
//     cy.get('button').contains('Start Quiz').click()

//     // Step 5: Verify that the multiple choice questions are displayed with buttons 1, 2, 3, and 4
//     cy.get('button').contains('1').should('be.visible')
//     cy.get('button').contains('2').should('be.visible')
//     cy.get('button').contains('3').should('be.visible')
//     cy.get('button').contains('4').should('be.visible')
//   })
// })