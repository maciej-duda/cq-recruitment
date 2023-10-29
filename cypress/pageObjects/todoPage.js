class TodoPage {
    visit() {
      cy.visit('https://todomvc.com/examples/react/#/');
    }
  
    addItem(itemText) {
      cy.get('.new-todo').type(itemText + '{enter}');
    }
  
    verifyItem(itemText) {
      cy.get('label').should('have.text', itemText);
    }
  }
  
  export default new TodoPage();