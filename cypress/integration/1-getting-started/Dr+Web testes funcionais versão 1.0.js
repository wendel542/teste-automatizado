/// <reference types='Cypress' />


  it('Verificar se esta cadastrando ', () => {
    cy.visit(`https://homol-app.drmais.com.br:3001/sign-up`)



    function validacao(array,route){
        array.forEach((posicao)=>{
        cy.get(`[data-cy="${posicao.nameInput}"]`).clear().type(posicao.type).should('contain.text',posicao.validacao)
        })
    }


    const arrName = [{type:'Dark belmonts',nameInput:'nm_pessoa',validacao:''}]

        const arrCpf = [ {type:'93425520059',nameInput:'nr_cpf',validacao:''}]

        const arrDtNascimento = [{type:'27/12/1995 ',nameInput:'dt_nascimento',validacao:''}]

        validacao(arrName)
        validacao(arrCpf)
        validacao(arrDtNascimento)

        cy.get('select')
        .select([3])
        cy.get('form').submit()

        const arrNumerotelefone = [{type:'62985682196',nameInput:'nr_celular',validacao:''}]

        const arrEmail = [{type:'coelhowendel131@gmail.com',nameInput:'ds_email',validacao:''}]

        const arrConfirmaemail = [{type:'coelhowendel131@gmail.com',nameInput:'confirmar_email',validacao:''}]

        const arrSenha = [{type:'Wendel@#123',nameInput:'ds_senha',validacao:''}]

        const arrConfirmasenha = [{type:'Wendel@#123',nameInput:'confirmar_senha',validacao:''}]

        validacao(arrNumerotelefone)
        validacao(arrEmail)
        validacao(arrConfirmaemail)
        validacao(arrSenha)
        validacao(arrConfirmasenha)

        cy.get('[data-cy="termos_aceite"]').check()
        cy.get('[data-cy="dados_verdadeiros"]').click()
        cy.get('form').submit()
        cy.get('.modal-content > .sc-hKwDye').should('contain.text','Erro ao Cadastrar!Usuário já consta cadastrado com nome, cpf e dt. nascimento informados!Recuperar SenhaVoltar')
        cy.get(':nth-child(1) > .sc-pVTFL > [type="button"] > .sc-jrQzAO').click()

        const arrRecuperarcpf = [{type:'93425520059',nameInput:'nr_cpf',validacao:''}]

         const arrRecuperaremail = [{type:'wendelcoelho@gcmail',nameInput:'ds_email',validacao:''}]

         validacao(arrRecuperarcpf)
         validacao(arrRecuperaremail)

         cy.get('form').submit()
         cy.get('.sc-gsDKAQ > div > p').should('contain.text','Foi enviado um código para o seu e-mail')
         cy.get('[data-cy="nr_token"]').type(' ')
         cy.get('form').submit()
         .should('contain.text','CódigoConfirmarReenviar')
         cy.get('form').submit()


  })

  it('validar se ira receber token com conta ativa',()=>{
    cy.visit(`https://homol-app.drmais.com.br:3001/sign-in`)

    cy.get('[data-cy="login"]').type('coelhowendel131@gmail.com').should('be.visible')
    cy.get('[data-cy="password"]').type('Wendel@#123').should('be.visible')
    cy.get('form').submit().should('be.visible')
    cy.get('.sc-gsDKAQ > div > p').should('contain.text','Confirme o seu acesso no e-mail que enviamos para você')


})


it('validar se ira fazer fluxo de enviar codigo', () => {
  cy.visit(`https://homol-app.drmais.com.br:3001/sign-in`)
  cy.get('.recuperarSenha').click()



  function validacao(array,route){
      array.forEach((posicao)=>{
      cy.get(`[data-cy="${posicao.nameInput}"]`).clear().type(posicao.type).should('contain.text',posicao.validacao)
      cy.get('form').submit()
      })
  }

  const arrRecuperarcpf = [{type:'96699517040',nameInput:'nr_cpf',validacao:''}]

  const arrRecuperaremail = [{type:'coelhowendel131@gmail.com',nameInput:'ds_email',validacao:''}]

   validacao(arrRecuperarcpf)
   validacao(arrRecuperaremail)
   cy.get('.sc-gsnTZi > div').should('have.text','Solicitação realizada!Foi enviado um código para o seu e-mail')

  })


it('Verificar se ao cadastrar uma conta existente esta fazendo fluxo de  recuperar senha', () => {
  cy.visit(`https://homol-app.drmais.com.br:3001/sign-up`)



  function validacao(array,route){
      array.forEach((posicao)=>{
      cy.get(`[data-cy="${posicao.nameInput}"]`).clear().type(posicao.type).should('contain.text',posicao.validacao)
      })
  }


  const arrName = [{type:'wendel coelho',nameInput:'nm_pessoa',validacao:''}]

      const arrCpf = [ {type:'93425520059',nameInput:'nr_cpf',validacao:''}]

      const arrDtNascimento = [{type:'27/12/1995 ',nameInput:'dt_nascimento',validacao:''}]

      validacao(arrName)
      validacao(arrCpf)
      validacao(arrDtNascimento)

      cy.get('select')
      .select([3])
      cy.get('form').submit()

      const arrNumerotelefone = [{type:'62985682196',nameInput:'nr_celular',validacao:''}]

      const arrEmail = [{type:'coelhowendel131@gmail.com',nameInput:'ds_email',validacao:''}]

      const arrConfirmaemail = [{type:'coelhowendel131@gmail.com',nameInput:'confirmar_email',validacao:''}]

      const arrSenha = [{type:'Wendel@#123',nameInput:'ds_senha',validacao:''}]

      const arrConfirmasenha = [{type:'Wendel@#123',nameInput:'confirmar_senha',validacao:''}]

      validacao(arrNumerotelefone)
      validacao(arrEmail)
      validacao(arrConfirmaemail)
      validacao(arrSenha)
      validacao(arrConfirmasenha)

      cy.get('[data-cy="termos_aceite"]').check()
      cy.get('[data-cy="dados_verdadeiros"]').click()
      cy.get('form').submit()
      cy.get('.modal-content > .sc-hKMtZM').should('contain.text','Erro ao Cadastrar!Já existe uma conta cadastrada com esta informação (coelhowendel131@gmail.com)!Recuperar SenhaVoltar')
      cy.get(':nth-child(2) > .sc-papXJ > button > .sc-jqUVSM > .titulo > span').click()
      cy.get('form').submit()
      cy.get('.modal-content > .sc-hKMtZM').should('contain.text','Erro ao Cadastrar!Já existe uma conta cadastrada com esta informação (coelhowendel131@gmail.com)!Recuperar SenhaVoltar')
      cy.get('.sc-jSMfEi > :nth-child(1) > .sc-papXJ > button > .sc-jqUVSM > .titulo > span').click()
      cy.get('.sc-hKMtZM').should('have.text','Recuperar SenhaCPFE-mailRecuperar SenhaQuero efetuar o login')
      cy.get('.titulo > span').click()
      cy.get('.sc-gsnTZi > div > p').should('have.text','Foi enviado um código para o seu e-mail')
      cy.get(':nth-child(2) > button > .sc-jqUVSM > .titulo > span').click()

})


it('Acessar login E-mail  apresentar todas informações no dashboard', () => {

  cy.visit(`https://homol-app.drmais.com.br:3001/sign-in`)
  cy.get('[data-cy="login"]').type('coelhowendel131@gmail.com')
  cy.get('[data-cy="password"]').type('Wendel@#123')
  cy.get('.titulo > span').click()
  cy.get('.sc-bwANAz').should('have.text','Ao perceber qualquer dor ou desconforto nos pequenos, acione nosso Pronto Atendimento! Rápido, seguro e de qualquer lugar!')
  cy.get('.sc-ekGZSs > .sc-papXJ > button').should('have.text','Nova Consulta')
  cy.get('.p-4').should('have.text','Especialidades DisponíveisClínica médicaPediatria')
  cy.get('.main-home > a > .icon-box > svg').should('have.text','Início')
  cy.get('[role="presentation"] > .icon-box > svg').should('have.text','Nova Consulta')
  cy.get('.main-forum > a > div').should('have.text','Dúvidas')
  cy.get('.icon-box-help').should('have.text','AjudaAjuda')
  cy.get('.main-perfil > a > .icon-box').should('have.text','avatarMeu Perfil')
  cy.get('.carousel-control-next-icon').click()
  cy.get('.carousel-control-prev-icon').click()
  cy.get(`[id*="CardBlog"]> div > button.sc-bKhNmF.hCMWmU`).click({ multiple: true })
  cy.get(`[id*="CardBlog"]> div > button.sc-jhfVAM.clruJO`).click({ multiple: true })


})

it('Acessar login CPF apresentar todas informações no dashboard', () => {

  cy.visit(`https://homol-app.drmais.com.br:3001/sign-in`)
  cy.get('[data-cy="login"]').type('96699517040')
  cy.get('[data-cy="password"]').type('Wendel@#123')
  cy.get('.titulo > span').click()
  cy.get('.sc-bwANAz').should('have.text','Ao perceber qualquer dor ou desconforto nos pequenos, acione nosso Pronto Atendimento! Rápido, seguro e de qualquer lugar!')
  cy.get('.sc-ekGZSs > .sc-papXJ > button').should('have.text','Nova Consulta')
  cy.get('.p-4').should('have.text','Especialidades DisponíveisClínica médicaPediatria')
  cy.get('.main-home > a > .icon-box > svg').should('have.text','Início')
  cy.get('[role="presentation"] > .icon-box > svg').should('have.text','Nova Consulta')
  cy.get('.main-forum > a > div').should('have.text','Dúvidas')
  cy.get('.icon-box-help').should('have.text','AjudaAjuda')
  cy.get('.main-perfil > a > .icon-box').should('have.text','avatarMeu Perfil')
  cy.get('.carousel-control-next-icon').click()
  cy.get('.carousel-control-prev-icon').click()



})

it('Acessar login CELULAR apresentar todas informações no dashboard', () => {

  cy.visit(`https://homol-app.drmais.com.br:3001/sign-in`)
  cy.get('[data-cy="login"]').type('(62) 98178-4949')
  cy.get('[data-cy="password"]').type('Wendel@#123')
  cy.get('.titulo > span').click()
  cy.get('.sc-bwANAz').should('have.text','Ao perceber qualquer dor ou desconforto nos pequenos, acione nosso Pronto Atendimento! Rápido, seguro e de qualquer lugar!')
  cy.get('.sc-ekGZSs > .sc-papXJ > button').should('have.text','Nova Consulta')
  cy.get('.p-4').should('have.text','Especialidades DisponíveisClínica médicaPediatria')
  cy.get('.main-home > a > .icon-box > svg').should('have.text','Início')
  cy.get('[role="presentation"] > .icon-box > svg').should('have.text','Nova Consulta')
  cy.get('.main-forum > a > div').should('have.text','Dúvidas')
  cy.get('.icon-box-help').should('have.text','AjudaAjuda')
  cy.get('.main-perfil > a > .icon-box').should('have.text','avatarMeu Perfil')
  cy.get('.carousel-control-next-icon').click()
  cy.get('.carousel-control-prev-icon').click()


})

it.only('verificar se esta saindo do sistema', () => {

  cy.visit(`https://homol-app.drmais.com.br:3001/sign-in`)
  cy.get('[data-cy="login"]').type('coelhowendel131@gmail.com')
  cy.get('[data-cy="password"]').type('Wendel@#123')
  cy.get('.titulo > span').click()
  cy.get('.sc-bwANAz').should('have.text','Ao perceber qualquer dor ou desconforto nos pequenos, acione nosso Pronto Atendimento! Rápido, seguro e de qualquer lugar!')
  cy.get('.sc-ekGZSs > .sc-papXJ > button').should('have.text','Nova Consulta')
  cy.get('.p-4').should('have.text','Especialidades DisponíveisClínica médicaPediatria')
  cy.get('.main-home > a > .icon-box > svg').should('have.text','Início')
  cy.get('[role="presentation"] > .icon-box > svg').should('have.text','Nova Consulta')
  cy.get('.main-forum > a > div').should('have.text','Dúvidas')
  cy.get('.icon-box-help').should('have.text','AjudaAjuda')
  cy.get('.main-perfil > a > .icon-box').should('have.text','avatarMeu Perfil')
  cy.get('.carousel-control-next-icon').click()
  cy.get('.carousel-control-prev-icon').click()
  cy.get('.exit').should('have.text','Sair').click()
  cy.get('.modal-content > .sc-hKMtZM').should('have.text','Sair do sistemaDeseja realmente sair do sistema?ConfirmarCancelar')
  cy.get('.sc-jSMfEi > :nth-child(2) > .sc-papXJ > button').should('have.text','Cancelar').click()
  cy.get('.exit').should('have.text','Sair').click()
  cy.get('.modal-content > .sc-hKMtZM').should('have.text','Sair do sistemaDeseja realmente sair do sistema?ConfirmarCancelar')
  cy.get('.sc-jSMfEi > :nth-child(1) > .sc-papXJ > button').should('have.text','Confirmar').click()
})


it('Fazer Nova consulta Pronto atendimento',() =>{
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
cy.get(':nth-child(2) > .col-xl-4 > .sc-papXJ > button > .sc-jqUVSM > .titulo > span').click()
cy.get(':nth-child(1) > .sc-papXJ > button > .sc-jqUVSM > .titulo')
cy.get('.sc-fmrZth').click()
cy.get('.sc-hKMtZM > :nth-child(1)').should('have.text','Opções de pagamento')
cy.get('.col-xl-4 > .sc-papXJ > button > .sc-jqUVSM').should('have.text','  Voltar')
cy.get('.main-menu').should('have.text','InícioInícioNova ConsultaNova ConsultaDúvidasAjudaAjudaavatarMeu Perfil')
cy.get(':nth-child(5) > .sc-gDeeJ > :nth-child(2) > .col > .sc-papXJ > button > .sc-jqUVSM > .titulo').click()

})
