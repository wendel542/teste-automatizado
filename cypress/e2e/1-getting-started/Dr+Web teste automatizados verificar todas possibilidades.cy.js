

context('Testes Dr+web', () => {



    it.only('Fazer cadastros', () => {
    cy.visit(`https://homol-app.drmais.com.br:3001/sign-up`)



    function validacao(array,route){
        array.forEach((posicao)=>{
            cy.get(`input[data-cy="${posicao.nameInput}"]`) .clear().type(posicao.type)
            cy.get('form').submit()
            .wait(2000)
            cy.get(`[data-cy="${posicao.nameInput}"]`).should('contain.text',posicao.validacao)

        })}


        const arrName = [{type:'  ',nameInput:'nm_pessoa',validacao:''},
        {type:'wendel',nameInput:'nm_pessoa',validacao:'Informe nome completo'},
        {type:'kaio sousa',nameInput:'nm_pessoa',validacao:''}]

        const arrCpf = [{type:'99999999999',nameInput:'nr_cpf',validacao:'CPF inválido!'},
        {type:'  ',nameInput:'nr_cpf',validacao:''},
        {type:'93425520059',nameInput:'nr_cpf',validacao:''}]

        const arrDtNascimento = [{type:'27/13/1990',nameInput:'dt_nascimento',validacao:''},
        {type:'27/13/1990',nameInput:'dt_nascimento',validacao:'Data inválida'},
        {type:'27/12/2021',nameInput:'dt_nascimento',validacao:'O titular da conta deve ter mais que 16 anos'},
        {type:'27/12/1995 ',nameInput:'dt_nascimento',validacao:''}]


        validacao(arrName)
        validacao(arrCpf)
        validacao(arrDtNascimento)

        cy.get('select')
        .select([0])
        cy.get('.sc-gsDKAQ > div > p').should('have.text','')
        .wait(1000)
        cy.get('select')
        .select([3])
        cy.get('form').submit()

        const arrNumerotelefone = [{type:' ',nameInput:'nr_celular',validacao:'O número do DDD + celular e obrigatório'},
        {type:'000000000000',nameInput:'nr_celular',validacao:'Número informado é inválido'},
        {type:'62856821845',nameInput:'nr_celular',validacao:'Número informado é inválido'},
        {type:'62985682190',nameInput:'nr_celular',validacao:'Número informado é inválido'}]

        const arrEmail = [{type:' ',nameInput:'ds_email',validacao:'E-mail obrigatório'},
        {type:'wendel@@gmail.com',nameInput:'ds_email',validacao:'Digite um e-mail válido'},
        {type:'coelhowendel131@gmail.com',nameInput:'ds_email',validacao:''}]

        const arrConfirmaemail = [{type:'wed',nameInput:'confirmar_email',validacao:'E-mail e confirmação precisam ser iguais.'},
        {type:'coelhowendel131@gmail.com',nameInput:'confirmar_email',validacao:''}]


        const arrSenha = [{type:'n',nameInput:'ds_senha',validacao:'A senha deverá conter: 1 letra maiúscula, 1 letra minúscula e 1 caractere numérico!'},
        {type:'Wendel',nameInput:'ds_senha',validacao:'A senha deverá conter: 1 letra maiúscula, 1 letra minúscula e 1 caractere numérico!'},
        {type:'Wendel1234',nameInput:'ds_senha',validacao:'Senha e confirmação precisam ser iguais.'},
        {type:'Wendel@#123',nameInput:'ds_senha',validacao:'Senha e confirmação precisam ser iguais.'},
        {type:'Wendel@#123',nameInput:'ds_senha',validacao:'Senha e confirmação precisam ser iguais.'},
        {type:'Wendel@#123',nameInput:'ds_senha',validacao:'Senha e confirmação precisam ser iguais.'}]

        const arrConfirmasenha = [{type:' ',nameInput:'confirmar_senha',validacao:'Senha e confirmação precisam ser iguais.'},
        {type:'senha',nameInput:'confirmar_senha',validacao:'Senha e confirmação precisam ser iguais.'},
        {type:'Wendel123',nameInput:'confirmar_senha',validacao:'Senha e confirmação precisam ser iguais.'},
        {type:'Wendel@#123',nameInput:'confirmar_senha',validacao:'Senha e confirmação precisam ser iguais.'},
        {type:'Wendel@#123',nameInput:'confirmar_senha',validacao:'Necessário aceitar nossos termos de privacidade e termos de uso dos seus dados'}]

        validacao(arrNumerotelefone)
        validacao(arrEmail)
        validacao(arrConfirmaemail)
        validacao(arrSenha)
        validacao(arrConfirmasenha)

        cy.get('[data-cy="termos_aceite"]').check()
        cy.get('.sc-gsDKAQ > div > p').should('contain.text',"Necessário aceitar nossos termos de privacidade e termos de uso dos seus dados")
        cy.get('form').submit()
        cy.get('[data-cy="dados_verdadeiros"]').uncheck()
        cy.get('.sc-gsDKAQ > div > p').should('contain.text',"Necessário confirmar a declaração")
        cy.get('form').submit()
        cy.get('[data-cy="dados_verdadeiros"]').click()
        cy.get('form').submit()
        cy.get('.sc-gsDKAQ > div > p').should('contain.text',"Você deve confirmar o cadastro no seu e-mail antes entrar!")


    })

    it('validar se ira receber token com conta ativa',()=>{
        cy.visit(`https://homol-app.drmais.com.br:3001/sign-in`)

        cy.get('[data-cy="login"]').type('coelhowendel131@gmail.com').should('be.visible')
        cy.get('[data-cy="password"]').type('Wendel@#123').should('be.visible')
        cy.get('form').submit().should('be.visible')
        cy.get('.sc-gsDKAQ > div > p').should('contain.text','Confirme o seu acesso no e-mail que enviamos para você')


    })


    it('Verificar se ao cadastrar uma conta existente esta apresentando modal recuperar senha', () => {
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
        cy.get('.modal-content > .sc-hKwDye').should('contain.text','Erro ao Cadastrar!Usuário já consta cadastrado com nome, cpf e dt. nascimento informados!Recuperar SenhaVoltar')
        cy.get(':nth-child(1) > .sc-pVTFL > [type="button"] > .sc-jrQzAO').click()

        const arrRecuperarcpf = [ {type:'00000000000',nameInput:'nr_cpf',validacao:''},
        {type:'93425520059',nameInput:'nr_cpf',validacao:''}]

         const arrRecuperaremail = [{type:'wendelcoelho@gcmail',nameInput:'ds_email',validacao:''},
         {type:'coelhowendel131@gmail.com',nameInput:'ds_email',validacao:''}]

         validacao(arrRecuperarcpf)
         validacao(arrRecuperaremail)

         cy.get('form').submit()
         cy.get('.sc-gsDKAQ > div > p').should('contain.text','Foi enviado um código para o seu e-mail')
         cy.get('[data-cy="nr_token"]').type(' ')
         cy.get('form').submit()
         .should('contain.text','CódigoConfirmarReenviar')
         cy.get('form').submit()


  })

  it.only('validar se ira fazer fluxo de enviar codigo', () => {
    cy.visit(`https://homol-app.drmais.com.br:3001/sign-in`)
    cy.get('.recuperarSenha').click()



    function validacao(array,route){
        array.forEach((posicao)=>{
        cy.get(`[data-cy="${posicao.nameInput}"]`).clear().type(posicao.type).should('contain.text',posicao.validacao)
        cy.get('form').submit()
        })
    }

    const arrRecuperarcpf = [ {type:'00000000000',nameInput:'nr_cpf',validacao:''},
    {type:'93425520059',nameInput:'nr_cpf',validacao:''}]

     const arrRecuperaremail = [{type:'wendelcoelho@gcmail',nameInput:'ds_email',validacao:''},
     {type:'coelhowendel131@gmail.com',nameInput:'ds_email',validacao:''}]

     validacao(arrRecuperarcpf)
     validacao(arrRecuperaremail)

     cy.get('.sc-gsDKAQ').should('contain.text','Solicitação realizada!Foi enviado um código para o seu e-mail')



    })

})
