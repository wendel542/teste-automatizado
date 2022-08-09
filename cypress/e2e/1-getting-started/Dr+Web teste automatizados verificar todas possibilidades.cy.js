

context('Testes Dr+web', () => {


it('Acessar login E-mail  apresentar todas informações no dashboard', () => {

  cy.visit(`https://homol-app.drmais.com.br:3001/sign-in`)
  cy.get('[data-cy="login"]').type('coelhowendel131@gmail.com')
  cy.get('[data-cy="password"]').type('Wendel@#123')
  cy.get('.titulo > span').click()
    })

})
