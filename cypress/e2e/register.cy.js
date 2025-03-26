describe('Testes no endpoint de registro de usuário', () => {
  
  // Observação depois validar melhor este cenário
  it('Cenário em que todos os campos estão vazios', () => {

    // Campos vazios
    const newUser = {
      fullname: '',
      email: '',
      password: ''
    };

    // Realizando a requisição
    cy.request({
      method: 'POST',
      url: Cypress.env('apiRegisterUrl'), 
      body: newUser, 
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
    });
  });
});


  
  
  

