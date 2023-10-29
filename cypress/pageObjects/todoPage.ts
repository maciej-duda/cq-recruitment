// Import Cypress types
import { Chainable } from 'cypress';

class TodoPage {
  visit(): Chainable {
    return cy.visit('https://todomvc.com/examples/react/#/');
  }

  addItem(itemText: string): void {
    cy.get('.new-todo').type(itemText + '{enter}');
  }

  verifyItem(itemText: string): void {
    cy.get('label').should('have.text', itemText);
  }

  completeItem(): void {
    cy.get('.toggle').check();
  }

  checkItemCompletion(): void {
    cy.get('li.completed').should('exist');
  }

  removeCompletedItems(): void {
    cy.get('.clear-completed').click();
  }

  checkRemoval(itemText: string): void {
    cy.get('label').should('not.exist');
  }

  removeSingleItem(): void {
    // Handle removing a single item
    cy.get('.destroy').click({ force: true });
  }
}

export default new TodoPage();