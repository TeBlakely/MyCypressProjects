describe ('Login', () => {

    it ('Add Email for Login', () => {
        cy.visit('https://automationpratice.com.br/contact-two')
          cy.get('#top_header')