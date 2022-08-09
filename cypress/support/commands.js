/// <reference types='Cypress' />




import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
   // failing the test
return false
})


//import loc from './cypress/support/commands'
//import loc from  './locators'

//Cypress.Commands.add('typeLogin', (user) => {

  //cy.visit(`https://homol-app.drmais.com.br:3001/sign-in`)
  //cy.get('[data-cy="login"]').type('wendellify@gmail.com')
  //cy.get('[data-cy="password"]').type('Wendel@#123')
  //cy.get('.container > .sc-papXJ > button > .sc-jqUVSM').click()


//})


Cypress.Commands.add('login',(usuario, senha) =>{
cy.visit(`https://homol-app.drmais.com.br:3001/sign-in`)
cy.get('[data-cy="login"]').type(usuario)
cy.get('[data-cy="password"]').type(senha)
cy.get('.titulo > span').click()
})

import 'cypress-file-upload';
