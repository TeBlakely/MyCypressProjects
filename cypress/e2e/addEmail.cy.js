describe ('Adicionar Email', () => {

    it ('Cadastrado com sucesso', () => {

        cy.visit('https://automationpratice.com.br/')
          cy.get('#top_header')

        cy.get('.form-control')
          .type('teka.feques@gmail.com')

         
        cy.get('.clear .theme-btn-one.btn_md')
           .click()

          //cy.get('.al2-confirm'),mnm,n,mn,mnmn,mn,mn
          // .click()
          
          

        cy.get('#swal2-title')
     
           .should('be.visible')
           .should('have.text', 'Success')
           
           .wait (3000)

        cy.get('.swal2-confirm')
           .click()


    })
   
             
    
    
        })
    

 
