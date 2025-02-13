describe ('Login', () => {

    it ('Add Email for Login', () => {
        cy.visit('https://automationpratice.com.br/login')
          cy.get('#top_header')

        cy.get ('#user')
          .type ('teka.feques@gmail.com')

        cy.get('#password')  
          .type ('123456')


        cy.get('#btnLogin')
          .click()
;
        cy.get('#materialUnchecked', { timeout: 5000 })  
          .should('exist')
          .check()
          .should('be.checked');


       
        
          cy.get('.swal2-confirm')
          .click()
    })
    })