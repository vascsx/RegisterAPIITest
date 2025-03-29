describe('Testes no endpoint de registro de usuário', () => {

  //Cenários em que os campos estão com formato incorreto

  it('Cenário em que fullName está sendo preenchido com números', () => {

    // Campo fullName vazio
    const newUser = {
      "fullName": "Anderson1",
      "email": "teste@gmail.com",
      "password": "senhaessss"
    };
  
    // Realizando a requisição
    cy.request({
      method: 'POST',
      url: Cypress.env('apiRegisterUrl'), 
      body: newUser, 
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.erros[0]).to.equal("O campo 'FullName' deve conter apenas letras");
    });
  });

  it('Cenário em que email está sendo preenchido sem o @', () => {

    // Campo fullName vazio
    const newUser = {
      "fullName": "Anderson",
      "email": "testegmail.com",
      "password": "testeyes"
    };
  
    // Realizando a requisição
    cy.request({
      method: 'POST',
      url: Cypress.env('apiRegisterUrl'), 
      body: newUser, 
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.erros[0]).to.equal("O campo 'Email' não é válido.");
    });
  });

  it('Cenário em que email está sendo preenchido sem o .com', () => {

    // Campo fullName vazio
    const newUser = {
      "fullName": "Anderson",
      "email": "teste@gmailcom",
      "password": "testeees"
    };
  
    // Realizando a requisição
    cy.request({
      method: 'POST',
      url: Cypress.env('apiRegisterUrl'), 
      body: newUser, 
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.erros[0]).to.equal("O campo 'Email' não é válido.");
    });
  });

  it('Cenário em que o password é menor que 6 caracteres', () => {

    // Campo fullName vazio
    const newUser = {
      "fullName": "Anderson",
      "email": "teste@gmail.com",
      "password": "teese"
    };
  
    // Realizando a requisição
    cy.request({
      method: 'POST',
      url: Cypress.env('apiRegisterUrl'), 
      body: newUser, 
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.erros[0]).to.equal("A senha deve ter no mínimo 6 caracteres.");
    });
  });

  //Cenários em que os campos estão vazios

  it('Cenário em que fullName está vazio', () => {

    // Campo fullName vazio
    const newUser = {
      "fullName": "",
      "email": "teste@gmail.com",
      "password": "testees"
    };
  
    // Realizando a requisição
    cy.request({
      method: 'POST',
      url: Cypress.env('apiRegisterUrl'), 
      body: newUser, 
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.erros[0]).to.equal("O campo 'FullName' é obrigatório.");
    });
  });
  

  it('Cenário em que email está vazio', () => {

    // Campo email vazio
    const newUser = {
      "fullName": "Anderson Vasc",
      "email": "",
      "password": "testees"
    };
  
    // Realizando a requisição
    cy.request({
      method: 'POST',
      url: Cypress.env('apiRegisterUrl'), 
      body: newUser, 
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.erros[0]).to.equal("O campo 'Email' é obrigatório.");
    });
  });


  it('Cenário em que password está vazio', () => {

    // Campo password
    const newUser = {
      "fullName": "Anderson Vasc",
      "email": "teste@gmail.com",
      "password": ""
    };
  
    // Realizando a requisição
    cy.request({
      method: 'POST',
      url: Cypress.env('apiRegisterUrl'), 
      body: newUser, 
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.erros[0]).to.equal("O campo 'Password' é obrigatório.");
    });
  });

  it('Cenário em que todos os campos estão vazios', () => {

    // Campos vazios
    const newUser = {
      "fullName": "",
      "email": "",
      "password": ""
    };
  
    // Realizando a requisição
    cy.request({
      method: 'POST',
      url: Cypress.env('apiRegisterUrl'), 
      body: newUser, 
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.erro).to.equal("Nenhum campo foi preenchido!");
    });
  });

});
