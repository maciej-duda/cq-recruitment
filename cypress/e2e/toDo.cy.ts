import TodoPage from '../pageObjects/todoPage';
const addItem = 'Buy groceries';

describe('To-Do List', () => {
  beforeEach(() => {
    TodoPage.visit();
  });

  it('Should add a to-do item', () => {
    // Add a to-do item using the page object method
    TodoPage.addItem(addItem);
    // Verify that the to-do item has been added to the list
    TodoPage.verifyItem(addItem);
  });

  it('Should complete an item on the list', () => {
    // Add and verify if item is added correctly
    TodoPage.addItem(addItem);
    TodoPage.verifyItem(addItem);
    // Check the checkbox before item name to complete item
    TodoPage.completeItem();
    // Check for list item state change to check if item was marked as completed
    TodoPage.checkItemCompletion();
  });

  it('Should remove an item from the list', () => {
    // Add and verify if item is added correctly
    TodoPage.addItem(addItem);
    TodoPage.verifyItem(addItem);
    // Completes the item from the list and then remove all completed items
    TodoPage.completeItem();
    TodoPage.removeCompletedItems();
    // Verify that the to-do item is removed
    TodoPage.checkRemoval(addItem);
  });

  it('Should remove a to-do item by hovering and clicking the "X" button', () => {
    // Add and verify if item is added correctly
    TodoPage.addItem(addItem);
    TodoPage.verifyItem(addItem);
    // Completes the item from the list and then remove completed item
    TodoPage.completeItem();
    TodoPage.removeSingleItem();
    // Verify that the to-do item is removed
    TodoPage.checkRemoval(addItem);
  });
});