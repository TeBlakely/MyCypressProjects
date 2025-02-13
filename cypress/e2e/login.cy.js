describe ('Login', () => {

    it ('Add Email for Login', () => {
        cy.visit('https://automationpratice.com.br/login')
          cy.get('#top_header')

        cy.get ('#user')
          .type ('teka.feques@gmail.com')

        cy.get('#password')  
          .type ('1234')


        cy.get('#btnLogin')
          .click()

          cy.get('.remember_area input[type="checkbox"]') 
          .check()  // Ensure checkbox is checked
          .should('be.checked');
        
    })
    })