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
});