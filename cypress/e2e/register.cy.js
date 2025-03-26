describe('Testes no endpoint de registro de usuário', () => {
  
  // // Observação depois validar melhor este cenário
  // it('Cenário em que todos os campos estão vazios', () => {

  //   // Campos vazios
  //   const newUser = {
  //     "fullName": "andersonv asconcelos",
  //     "email": "teste@gmail.com",
  //     "password": "asasasas"
  //   };

  //   // Realizando a requisição
  //   cy.request({
  //     method: 'POST',
  //     url: Cypress.env('apiRegisterUrl'), 
  //     body: newUser, 
  //     failOnStatusCode: false,
  //   }).then((response) => {
  //     expect(response.status).to.eq(400);
  //   });
  // });

  it('Cenário em que fullName está vazio', () => {

    // Campos vazios
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
      expect(response.body.erro).to.equal("O campo 'FullName' é obrigatório.");
    });
  });
  

  it('Cenário em que email está vazio', () => {

    // Campos vazios
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
      expect(response.body.erro).to.equal("O campo 'Email' é obrigatório.");
    });
  });


  it('Cenário em que password está vazio', () => {

    // Campos vazios
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
      expect(response.body.erro).to.equal("O campo 'Password' é obrigatório.");
    });
  });


});
