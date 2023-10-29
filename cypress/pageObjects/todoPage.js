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

    completeItem() {
      cy.get('.toggle').check();
    }

    checkItemCompletion() {
      cy.get('li.completed').should('exist')
    }

    removeCompletedItems(itemText) {
      cy.get('.clear-completed').click();
    }

    checkRemoval(itemText) {
      cy.get('label').should('not.exist');
    }

    removeSingleItem(itemText) {
        // no other idea how to handle this - I know it's not the elegant way
      cy.get('.destroy').click({ force: true })
    }
}
  
  export default new TodoPage();