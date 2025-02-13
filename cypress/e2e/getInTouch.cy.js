describe ('Get in Touch', () => {

    it ('Send Message', () => {
        cy.visit('https://automationpratice.com.br/contact-two')
          cy.get('#top_header')

        cy.get(':nth-child(1) > .form-group > .form-control')
          .type('Terena')

        cy.get(':nth-child(2) > .form-group > .form-control')
          .type('teka.feques@gmail.com')

        cy.get(':nth-child(3) > .form-group > .form-control')
         .type(3219469983)
            
        cy.get(':nth-child(4) > .form-group > .form-control')
         .type('delivery')
        
        cy.get('.col-lg-12 > .form-group > .form-control')
         .type(" Hey i was wondering how long takes to delivery it?")

        cy.get('.submit_bitton_contact_one > .theme-btn-one')
         .click()

    })
  })