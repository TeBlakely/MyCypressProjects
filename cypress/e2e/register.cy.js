describe ('Register', () => {

    it ('Fill the form', () => {
        cy.visit('https://automationpratice.com.br/register')
          cy.get('#top_header') 
        
        
        cy.get('#user')
          .type('Terena Blakely')
        
        cy.get('#email')
          .type('teka.feques@gmail.com')
        
        cy.get('#password')
         .type('123456')

        cy.get('#btnRegister')
         .click()

         .wait(3000)
        cy.get('.swal2-confirm')
          .click()

})

})