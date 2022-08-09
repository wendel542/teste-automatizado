/// <reference types='Cypress' />

 let faker =  require('faker-br');
 const { click, setHttpTimeout } = require('wd/lib/commands');
 const moment = require('moment')



it('sign-up', () => {
    cy.visit(`https://homol-app.drmais.com.br:3001/sign-in`)

        let randomname = faker.name.findName()
        let randomcpf = faker.br.cpf()
        let data =  faker.date.past(20,1990)
        let randombirth = moment(data).format('DD-MM-YYYY')
        let number = faker.phone.phoneNumber().replace(') ', ') 9')

        cy.get('a > button > .sc-jqUVSM > .titulo').click()
        cy.get('[data-cy="nm_pessoa"]').type(randomname)
        cy.get('[data-cy="nr_cpf"]').type(randomcpf)
        cy.get('[data-cy="dt_nascimento"]').type(randombirth)
        cy.get('select')
        .select([1])
        cy.get('.titulo').click()
        .wait(2000)
        cy.get('[data-cy="nr_celular"]').type(number)
        cy.get('[data-cy= "ds_email"]').type("coelhowendel131@gmail.com")
        cy.get('[data-cy= "confirmar_email"]').type("coelhowendel131@gmail.com")
        cy.get('form').submit()
        cy.get('[data-cy="ds_senha"]').type("Wendel@#123")
        cy.get('[data-cy="confirmar_senha"]').type("Wendel@#123")
        cy.get('[data-cy="termos_aceite"]').check()
        cy.get('[data-cy="dados_verdadeiros"]').click()
        cy.get('form').click()
        cy.get('button').click()
        cy.get('[data-cy="termos_aceite"]').check()
        cy.get('form').click()
        cy.get('form').click()
        cy.get('[data-cy="dados_verdadeiros"]').click()
        cy.get('form').click()
        .wait(2000)
        cy.get('.sc-gsnTZi > div').should('contain.text',"Cadastro realizadoVocê deve confirmar o cadastro no seu e-mail antes entrar!")


  })


it('validar se ira receber token com conta ativa',()=>{
    cy.visit(`https://homol-app.drmais.com.br:3001/sign-in`)

    cy.get('[data-cy="login"]').type('dorkteste@gmail.com').should('be.visible')
    cy.get('[data-cy="password"]').type('Wendel@#123').should('be.visible')
    cy.get('form').submit().should('be.visible')
    .wait(2000)
    cy.get('.sc-gsnTZi > div > p').should('contain.text','Confirme o seu acesso no e-mail que enviamos para você')


})

it('Verificar se ao cadastrar uma conta existente esta fazendo apresentando modal  recuperar senha', () => {
  cy.visit(`https://homol-app.drmais.com.br:3001/sign-in`)

      let randomname = faker.name.findName()
      let randomcpf = faker.br.cpf()
      let data =  faker.date.past(20,1990)
      let randombirth = moment(data).format('DD-MM-YYYY')
      let number = faker.phone.phoneNumber().replace(') ', ') 9')

      cy.get('a > button > .sc-jqUVSM > .titulo').click()
      cy.get('[data-cy="nm_pessoa"]').type(randomname)
      cy.get('[data-cy="nr_cpf"]').type(randomcpf)
      cy.get('[data-cy="dt_nascimento"]').type(randombirth)
      cy.get('select')
      .select([1])
      cy.get('.titulo').click()
      .wait(2000)
      cy.get('[data-cy="nr_celular"]').type(number)
      cy.get('[data-cy= "ds_email"]').type("dorkteste@gmail.com")
      cy.get('[data-cy= "confirmar_email"]').type("dorkteste@gmail.com")
      cy.get('form').submit()
      cy.get('[data-cy="ds_senha"]').type("Wendel@#123")
      cy.get('[data-cy="confirmar_senha"]').type("Wendel@#123")
      cy.get('[data-cy="termos_aceite"]').check()
      cy.get('[data-cy="dados_verdadeiros"]').click()
      cy.get('form').click()
      cy.get('button').click()
      cy.get('[data-cy="termos_aceite"]').check()
      cy.get('form').click()
      cy.get('form').click()
      cy.get('[data-cy="dados_verdadeiros"]').click()
      cy.get('form').click()
      .wait(2000)
      cy.get('.modal-content > .sc-hKMtZM').should('contain.text',"Erro ao Cadastrar!Já existe uma conta cadastrada com esta informação (dorkteste@gmail.com)!Recuperar SenhaVoltar")


})

it('validar se ira fazer fluxo de enviar codigo', () => {
  cy.visit(`https://homol-app.drmais.com.br:3001/sign-in`)

  cy.get('.recuperarSenha').click()
  cy.get('[data-cy="nr_cpf"]').type('06851089025')
  cy.get('[data-cy="ds_email"]').type('wendellify@gmail.com')
  cy.get('button')
  cy.get('.titulo > span').should('have.text','Recuperar Senha').click()
  .wait(2000)
  cy.get('.sc-dkzDqf').should('have.text','Solicitação realizada!Foi enviado um código para o seu e-mail')
  .wait(2000)
  cy.get(':nth-child(2) > button > .sc-jqUVSM').should('have.text','Reenviar').click()
  cy.get('.sc-gsnTZi > div > strong').should('have.text','Solicitação realizada!O código foi enviado novamente para o seu email!')

})



it('Acessar login E-mail  apresentar todas informações no dashboard', () => {

  cy.visit(`https://homol-app.drmais.com.br:3001/sign-in`)
  cy.get('[data-cy="login"]').type('coelhowendel131@gmail.com')
  cy.get('[data-cy="password"]').type('Wendel@#123')
  cy.get('.titulo > span').click()
  cy.get('.sc-bwANAz').should('have.text','Ao perceber qualquer dor ou desconforto nos pequenos, acione nosso Pronto Atendimento! Rápido, seguro e de qualquer lugar!')
  cy.get('.sc-ekGZSs > .sc-papXJ > button').should('have.text','Nova Consulta')
  cy.get('.p-4 > .sc-iBkjds').should('have.text','Especialidades Disponíveis')
  cy.get('.main-home > a > .icon-box > svg').should('have.text','Início')
  cy.get('[role="presentation"] > .icon-box > svg').should('have.text','Nova Consulta')
  cy.get('.main-forum > a > div').should('have.text','Dúvidas')
  cy.get('.icon-box-help').should('have.text','AjudaAjuda')
  cy.get('.main-perfil > a > .icon-box').should('have.text','Meu Perfil')
  cy.get('.carousel-control-next-icon').click()
  cy.get('.carousel-control-prev-icon').click()
  cy.get(`[id*="CardBlog"]> div > button.sc-bKhNmF.hCMWmU`).click({ multiple: true })
  cy.get(`[id*="CardBlog"]> div > button.sc-jhfVAM.clruJO`).click({ multiple: true })


})

it('Acessar login CPF apresentar todas informações no dashboard', () => {


  cy.visit(`https://homol-app.drmais.com.br:3001/sign-in`)
  cy.get('[data-cy="login"]').type('95642111159')
  cy.get('[data-cy="password"]').type('Wendel@#123')
  cy.get('.titulo > span').click()
  cy.get('.sc-bwANAz').should('have.text','Ao perceber qualquer dor ou desconforto nos pequenos, acione nosso Pronto Atendimento! Rápido, seguro e de qualquer lugar!')
  cy.get('.sc-ekGZSs > .sc-papXJ > button').should('have.text','Nova Consulta')
  cy.get('.p-4 > .sc-iBkjds').should('have.text','Especialidades Disponíveis')
  cy.get('.main-home > a > .icon-box > svg').should('have.text','Início')
  cy.get('[role="presentation"] > .icon-box > svg').should('have.text','Nova Consulta')
  cy.get('.main-forum > a > div').should('have.text','Dúvidas')
  cy.get('.icon-box-help').should('have.text','AjudaAjuda')
  cy.get('.main-perfil > a > .icon-box').should('have.text','Meu Perfil')
  cy.get('.carousel-control-next-icon').click()
  cy.get('.carousel-control-prev-icon').click()
  cy.get(`[id*="CardBlog"]> div > button.sc-bKhNmF.hCMWmU`).click({ multiple: true })
  cy.get(`[id*="CardBlog"]> div > button.sc-jhfVAM.clruJO`).click({ multiple: true })



})

it('Acessar login CELULAR apresentar todas informações no dashboard', () => {


  cy.visit(`https://homol-app.drmais.com.br:3001/sign-in`)
  cy.get('[data-cy="login"]').type('62988956595')
  cy.get('[data-cy="password"]').type('Wendel@#123')
  cy.get('.titulo > span').click()
  cy.get('.sc-bwANAz').should('have.text','Ao perceber qualquer dor ou desconforto nos pequenos, acione nosso Pronto Atendimento! Rápido, seguro e de qualquer lugar!')
  cy.get('.sc-ekGZSs > .sc-papXJ > button').should('have.text','Nova Consulta')
  cy.get('.p-4 > .sc-iBkjds').should('have.text','Especialidades Disponíveis')
  cy.get('.main-home > a > .icon-box > svg').should('have.text','Início')
  cy.get('[role="presentation"] > .icon-box > svg').should('have.text','Nova Consulta')
  cy.get('.main-forum > a > div').should('have.text','Dúvidas')
  cy.get('.icon-box-help').should('have.text','AjudaAjuda')
  cy.get('.main-perfil > a > .icon-box').should('have.text','Meu Perfil')
  cy.get('.carousel-control-next-icon').click()
  cy.get('.carousel-control-prev-icon').click()
  cy.get(`[id*="CardBlog"]> div > button.sc-bKhNmF.hCMWmU`).click({ multiple: true })
  cy.get(`[id*="CardBlog"]> div > button.sc-jhfVAM.clruJO`).click({ multiple: true })

})

it('verificar se esta saindo do sistema', () => {

  cy.visit(`https://homol-app.drmais.com.br:3001/sign-in`)
  cy.get('[data-cy="login"]').type('62988956595')
  cy.get('[data-cy="password"]').type('Wendel@#123')
  cy.get('.titulo > span').click()
  cy.get('.sc-bwANAz').should('have.text','Ao perceber qualquer dor ou desconforto nos pequenos, acione nosso Pronto Atendimento! Rápido, seguro e de qualquer lugar!')
  cy.get('.sc-ekGZSs > .sc-papXJ > button').should('have.text','Nova Consulta')
  cy.get('.p-4 > .sc-iBkjds').should('have.text','Especialidades Disponíveis')
  cy.get('.main-home > a > .icon-box > svg').should('have.text','Início')
  cy.get('[role="presentation"] > .icon-box > svg').should('have.text','Nova Consulta')
  cy.get('.main-forum > a > div').should('have.text','Dúvidas')
  cy.get('.icon-box-help').should('have.text','AjudaAjuda')
  cy.get('.main-perfil > a > .icon-box').should('have.text','Meu Perfil')
  cy.get('.carousel-control-next-icon').click()
  cy.get('.carousel-control-prev-icon').click()
  .wait(2000)
  cy.get('.icon-box > .box-acc_pic > .sc-kgUAyh').should('have.text','').click()
  cy.get(':nth-child(8) > .sc-hKMtZM').should('have.text','Sair do sistemaQuero sair do sistema').click()
  cy.get('.modal-content > .sc-hKMtZM').should('have.text','Sair do sistemaDeseja realmente sair do sistema?ConfirmarCancelar')
  cy.get('.sc-jSMfEi > :nth-child(2) > .sc-papXJ > button').should('have.text','Cancelar').click()
  cy.get(':nth-child(8) > .sc-hKMtZM').should('have.text','Sair do sistemaQuero sair do sistema').click()
  cy.get('.modal-content > .sc-hKMtZM').should('have.text','Sair do sistemaDeseja realmente sair do sistema?ConfirmarCancelar')
  cy.get('.sc-jSMfEi > :nth-child(1) > .sc-papXJ > button').should('have.text','Confirmar').click()
})


it('Fluxo Pronto atendimento ate rota  pay-options ',() =>{

cy.visit(`https://homol-app.drmais.com.br:3001/sign-in`)
cy.get('[data-cy="login"]').type('coelhowendel131@gmail.com')
cy.get('[data-cy="password"]').type('Wendel@#123')
cy.get('.titulo > span').click()
cy.get('.sc-ekGZSs > .sc-papXJ > button > .sc-jqUVSM > .titulo').should('have.text','Nova Consulta').click().wait(1000)
cy.get('.sc-papXJ > button > .sc-jqUVSM').should('have.text','Testar componentes').click().wait(1000)
cy.get(':nth-child(1) > .sc-fXynhf').should('have.text','InternetVerificado')
cy.get(':nth-child(2) > .sc-fXynhf').should('have.text','MicrofoneVerificado')
cy.get(':nth-child(3) > .sc-fXynhf').should('have.text','CâmeraVerificado')
cy.get(':nth-child(4) > .sc-fXynhf').should('have.text','ÁudioVerificado')
cy.get(':nth-child(5) > .sc-fXynhf').should('have.text','ServidoresVerificado')
cy.get(':nth-child(6) > .sc-fXynhf').should('have.text','NotificaçõesVerificado')
cy.get('.sc-papXJ > button > .sc-jqUVSM > .titulo').should('have.text','Continuar Atendimento').click()
cy.get('a > button').should('have.text','Cancelar')
cy.get(':nth-child(5) > .col-xl-4 > .sc-papXJ > button > .sc-jqUVSM > .titulo > span').click()
cy.get('.sc-iBkjds').should('have.text',' Selecione o paciente')
cy.get(':nth-child(2) > .justify-content-center > .col-xl-5 > .sc-fmrZth').click()
cy.get('.pl-4 > .sc-papXJ > button > .sc-jqUVSM').should('have.text', 'Confirmar seleção').click()
cy.get('.sc-hKMtZM > :nth-child(1)').should('have.text','Opções de pagamento')

})

it('Fluxo Pronto atendimento ate rota  attendance-options ',  () =>{

  cy.visit(`https://homol-app.drmais.com.br:3001/sign-in`)
  cy.get('[data-cy="login"]').type('coelhowendel131@gmail.com')
  cy.get('[data-cy="password"]').type('Wendel@#123')
  cy.get('.titulo > span').click()
  cy.get('.sc-ekGZSs > .sc-papXJ > button > .sc-jqUVSM > .titulo').should('have.text','Nova Consulta').click().wait(1000)
  cy.get('.sc-papXJ > button > .sc-jqUVSM').should('have.text','Testar componentes').click().wait(1000)
  cy.get(':nth-child(1) > .sc-fXynhf').should('have.text','InternetVerificado')
  cy.get(':nth-child(2) > .sc-fXynhf').should('have.text','MicrofoneVerificado')
  cy.get(':nth-child(3) > .sc-fXynhf').should('have.text','CâmeraVerificado')
  cy.get(':nth-child(4) > .sc-fXynhf').should('have.text','ÁudioVerificado')
  cy.get(':nth-child(5) > .sc-fXynhf').should('have.text','ServidoresVerificado')
  cy.get(':nth-child(6) > .sc-fXynhf').should('have.text','NotificaçõesVerificado')
  cy.get('.sc-papXJ > button > .sc-jqUVSM > .titulo').should('have.text','Continuar Atendimento').click()
  cy.get('a > button').should('have.text','Cancelar')
  cy.get(':nth-child(5) > .col-xl-4 > .sc-papXJ > button > .sc-jqUVSM > .titulo > span').click()
  cy.get('.sc-iBkjds').should('have.text',' Selecione o paciente')
  cy.get(':nth-child(3) > .justify-content-center > .col-xl-5 > .sc-fmrZth').click()
  cy.get('.pl-4 > .sc-papXJ > button > .sc-jqUVSM').should('have.text', 'Confirmar seleção').click()
  cy.get('.sc-hKMtZM > :nth-child(4) > :nth-child(1)').click()
  cy.get('[type="checkbox"]').check()
  cy.get('.sc-hKMtZM > :nth-child(4) > :nth-child(1)').should('not.be.checked')
  cy.get(':nth-child(4) > :nth-child(2)').should('not.be.checked')
  cy.get('[data-cy="fichaitem_4333"]').should('not.be.checked')
  cy.get('[data-cy="fichaitem_4332"]').should('not.be.checked')
  cy.get('[data-cy="fichaitem_4331"]').should('be.checked')
  cy.get(':nth-child(6) > :nth-child(2)').should('not.be.checked')
  cy.get(':nth-child(6) > :nth-child(1)').should('not.be.checked')
  cy.get('[data-cy="fichaitem_4321"]').should('not.be.checked')
  cy.get('[data-cy="fichaitem_4320"]').should('not.be.checked')
  cy.get('[data-cy="fichaitem_4319"]').should('be.checked')
  cy.get('.titulo > span').contains('Continuar').click()
  cy.get(':nth-child(1) > .sc-iBkjds').should('have.text','Deseja anexar algum documento para apresentar ao Médico?')
  cy.get(':nth-child(2) > .sc-iBkjds').should('have.text','Digite aqui alguma observação para o médico, link de algum exame para o médico acessar, etc...')
  cy.get('input[name="1"]').attachFile(['teste.png'])
  cy.get(':nth-child(1) > :nth-child(2) > .align-items-baseline > .col-md-3 > .sc-papXJ > button > .sc-jqUVSM').contains('Remover').click()
  cy.get('.sc-jSMfEi > :nth-child(1) > .sc-papXJ > button').contains('Sim').click()
  cy.get('input[name="2"]').attachFile(['teste.png'])
  cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .align-items-baseline > .col-md-3 > .sc-papXJ > button > .sc-jqUVSM').click()
  cy.get('.sc-jSMfEi > :nth-child(1) > .sc-papXJ > button').contains('Sim').click()
  cy.get('input[name="3"]').attachFile(['teste.png'])
  cy.get('.sc-kKrQFk > .align-items-baseline > .col-md-3 > .sc-papXJ > button').click()
  cy.get('.sc-jSMfEi > :nth-child(1) > .sc-papXJ > button').contains('Sim').click()
  cy.get('input[name="4"]').attachFile(['teste.png'])
  cy.get(':nth-child(4) > .sc-kKrQFk > .align-items-baseline > .col-md-3 > .sc-papXJ > button > .sc-jqUVSM > .titulo').click()
  cy.get('.sc-jSMfEi > :nth-child(1) > .sc-papXJ > button').contains('Sim').click()
  cy.get('[data-cy="ds_observacao"]').clear().type('teste teste teste teste teste')
  cy.get(':nth-child(1) > .sc-papXJ > button > .sc-jqUVSM > .titulo').should('have.text','Continuar').click()
  cy.get('.pt-3').should('have.text','Ser atendido agoraCancelar')

  })

  it('Fluxo agendar  atendimento ate rota  attendance-options ',  () =>{

    cy.visit(`https://homol-app.drmais.com.br:3001/sign-in`)
    cy.get('[data-cy="login"]').type('coelhowendel131@gmail.com')
    cy.get('[data-cy="password"]').type('Wendel@#123')
    cy.get('.titulo > span').click()
    cy.get('.sc-ekGZSs > .sc-papXJ > button > .sc-jqUVSM > .titulo').should('have.text','Nova Consulta').click().wait(1000)
    cy.get('.sc-papXJ > button > .sc-jqUVSM').should('have.text','Testar componentes').click().wait(1000)
    cy.get(':nth-child(1) > .sc-fXynhf').should('have.text','InternetVerificado')
    cy.get(':nth-child(2) > .sc-fXynhf').should('have.text','MicrofoneVerificado')
    cy.get(':nth-child(3) > .sc-fXynhf').should('have.text','CâmeraVerificado')
    cy.get(':nth-child(4) > .sc-fXynhf').should('have.text','ÁudioVerificado')
    cy.get(':nth-child(5) > .sc-fXynhf').should('have.text','ServidoresVerificado')
    cy.get(':nth-child(6) > .sc-fXynhf').should('have.text','NotificaçõesVerificado')
    cy.get('.sc-papXJ > button > .sc-jqUVSM > .titulo').should('have.text','Continuar Atendimento').click()
    cy.get(':nth-child(3) > .col-xl-4 > .sc-papXJ > button > .sc-jqUVSM').contains('Agendar para Adulto').click()
    cy.get(':nth-child(4) > .justify-content-center > .col-xl-5 > .sc-IIEeM').click()
    cy.get('.pl-4 > .sc-papXJ > button > .sc-jqUVSM').contains('Confirmar seleção').click()
    cy.get('.sc-iBkjds').should('have.text','Selecione o Profissional')
    cy.get(':nth-child(3) > .sc-jKDlA-D > .sc-papXJ > button > .sc-jqUVSM').click()
    cy.get('#id_16 > li > .container > .justify-content-center > .col-xl-5 > .sc-fmrZth').click()
    cy.get('.sc-eXBvqI > .sc-kgUAyh').should('be.visible')

  })



  it.only('Fluxo Pronto atendimento ate rota  attendance-options ',  () =>{

    cy.visit(`https://homol-app.drmais.com.br:3001/sign-in`)
    cy.get('[data-cy="login"]').type('coelhowendel131@gmail.com')
    cy.get('[data-cy="password"]').type('Wendel@#123')
    cy.get('.titulo > span').click()
    cy.get('.sc-ekGZSs > .sc-papXJ > button > .sc-jqUVSM > .titulo').should('have.text','Nova Consulta').click().wait(1000)
    cy.get('.sc-papXJ > button > .sc-jqUVSM').should('have.text','Testar componentes').click().wait(1000)
    cy.get(':nth-child(1) > .sc-fXynhf').should('have.text','InternetVerificado')
    cy.get(':nth-child(2) > .sc-fXynhf').should('have.text','MicrofoneVerificado')
    cy.get(':nth-child(3) > .sc-fXynhf').should('have.text','CâmeraVerificado')
    cy.get(':nth-child(4) > .sc-fXynhf').should('have.text','ÁudioVerificado')
    cy.get(':nth-child(5) > .sc-fXynhf').should('have.text','ServidoresVerificado')
    cy.get(':nth-child(6) > .sc-fXynhf').should('have.text','NotificaçõesVerificado')
    cy.get('.sc-papXJ > button > .sc-jqUVSM > .titulo').should('have.text','Continuar Atendimento').click()
    cy.get('a > button').should('have.text','Cancelar')
    cy.get(':nth-child(5) > .col-xl-4 > .sc-papXJ > button > .sc-jqUVSM > .titulo > span').click()
    cy.get('.sc-iBkjds').should('have.text',' Selecione o paciente')
    cy.get(':nth-child(3) > .justify-content-center > .col-xl-5 > .sc-fmrZth').click()
    cy.get('.pl-4 > .sc-papXJ > button > .sc-jqUVSM').should('have.text', 'Confirmar seleção').click()
    cy.get('.sc-hKMtZM > :nth-child(4) > :nth-child(1)').click()
    cy.get('[type="checkbox"]').check()
    cy.get('.sc-hKMtZM > :nth-child(4) > :nth-child(1)').should('not.be.checked')
    cy.get(':nth-child(4) > :nth-child(2)').should('not.be.checked')
    cy.get('[data-cy="fichaitem_4333"]').should('not.be.checked')
    cy.get('[data-cy="fichaitem_4332"]').should('not.be.checked')
    cy.get('[data-cy="fichaitem_4331"]').should('be.checked')
    cy.get(':nth-child(6) > :nth-child(2)').should('not.be.checked')
    cy.get(':nth-child(6) > :nth-child(1)').should('not.be.checked')
    cy.get('[data-cy="fichaitem_4321"]').should('not.be.checked')
    cy.get('[data-cy="fichaitem_4320"]').should('not.be.checked')
    cy.get('[data-cy="fichaitem_4319"]').should('be.checked')
    cy.get('.titulo > span').contains('Continuar').click()
    cy.get(':nth-child(1) > .sc-iBkjds').should('have.text','Deseja anexar algum documento para apresentar ao Médico?')
    cy.get(':nth-child(2) > .sc-iBkjds').should('have.text','Digite aqui alguma observação para o médico, link de algum exame para o médico acessar, etc...')
    cy.get('input[name="1"]').attachFile(['teste.png'])
    cy.get(':nth-child(1) > :nth-child(2) > .align-items-baseline > .col-md-3 > .sc-papXJ > button > .sc-jqUVSM').contains('Remover').click()
    cy.get('.sc-jSMfEi > :nth-child(1) > .sc-papXJ > button').contains('Sim').click()
    cy.get('input[name="2"]').attachFile(['teste.png'])
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .align-items-baseline > .col-md-3 > .sc-papXJ > button > .sc-jqUVSM').click()
    cy.get('.sc-jSMfEi > :nth-child(1) > .sc-papXJ > button').contains('Sim').click()
    cy.get('input[name="3"]').attachFile(['teste.png'])
    cy.get('.sc-kKrQFk > .align-items-baseline > .col-md-3 > .sc-papXJ > button').click()
    cy.get('.sc-jSMfEi > :nth-child(1) > .sc-papXJ > button').contains('Sim').click()
    cy.get('input[name="4"]').attachFile(['teste.png'])
    cy.get(':nth-child(4) > .sc-kKrQFk > .align-items-baseline > .col-md-3 > .sc-papXJ > button > .sc-jqUVSM > .titulo').click()
    cy.get('.sc-jSMfEi > :nth-child(1) > .sc-papXJ > button').contains('Sim').click()
    cy.get('[data-cy="ds_observacao"]').clear().type('teste teste teste teste teste')
    cy.get(':nth-child(1) > .sc-papXJ > button > .sc-jqUVSM > .titulo').should('have.text','Continuar').click()
    cy.get('.sc-hKMtZM > .justify-content-center > .col-xl-4 > .sc-papXJ > button > .sc-jqUVSM').click()
    .wait(2000)
    cy.intercept('POST','https://homol-app.drmais.com.br:3001/attendance-now/',).as('https://homol-app.drmais.com.br:3001/stream-page')



    })








    //cy.number('https://homol-app.drmais.com.br:3001/stream-page')

