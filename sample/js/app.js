class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }

  submitBudgetForm(){
    const value = this.budgetInput.value;
    if(value == "" || value < 0){
      this.budgetFeedback.classList.add("showItem");
      this.budgetFeedback.innerHTML = `<p>value cannot be empty or negative</p>`;

      // const self = this;

      setTimeout(() => { 
        this.budgetFeedback.classList.remove("showItem");    
        // self.budgetFeedback.classList.remove("showItem"); 
      }, 2000);
    }
    else{
      this.budgetAmount.textContent = value;
      this.budgetInput.value = "";
      this.showBalance();
    }
  }  

  showBalance(){
    const expense = this.totalExpense();
    const total = parseInt(this.budgetAmount.textContent) - expense;
    this.balanceAmount.textContent = total;
    if(total < 0){
      this.balance.classList.remove("showGreen", "showBlack");
      this.balance.classList.add("showRed");
    }
    else if(total > 0){
      this.balance.classList.remove("showRed", "showBlack");
      this.balance.classList.add("showGreen");
    }
    else if(total === 0){
      this.balance.classList.remove("showGreen", "showRed");
      this.balance.classList.add("showBlack");
    }
  }  

  submitExpenseForm(){
    const expenseValue = this.expenseInput.value;
    const amountValue = this.amountInput.value;
    if(expenseValue === "" || amountValue === "" || amountValue < 0){
      this.expenseFeedback.classList.add("showItem");
      this.expenseFeedback.innerHTML = `<p>value cannot be empty or negative</p>`;

      setTimeout(() => {
        this.expenseFeedback.classList.remove("showItem");
      }, 2000);
    }
    else{
      let amount = parseInt(amountValue);
      this.expenseInput.value = "";
      this.amountInput.value = "";

      let expense = {
        id: this.itemID,
        title: expenseValue,
        amount: amount
      };
      
      this.itemID++;
      this.itemList.push(expense); 
      this.addExpense(expense);    // Add expense to the expense list
      this.showBalance(); 
    }
  }  

  addExpense(expense){      // Create a new expense row and add it to the list
    const div = document.createElement('div');
    div.classList.add('expense');
    div.innerHTML = `
    <div class="expense-item d-flex justify-content-between align-items-baseline">
      <h6 class="expense-title mb-0 text-uppercase list-item">- ${expense.title}</h6>
      <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>
      <div class="expense-icons list-item">
        <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
          <i class="fas fa-edit"></i>
        </a>
        <a href="#" class="delete-icon" data-id="${expense.id}">
          <i class="fas fa-trash"></i>
        </a>
      </div>
    </div>
    `;
    this.expenseList.appendChild(div);

  } 

  totalExpense(){
    let total = 0;
    if(this.itemList.length > 0){
      total = this.itemList.reduce((accumulator, current) => {
        accumulator += current.amount;   // Since current is an gotten from the expense object
        return accumulator;
      }, 0);
    }
    this.expenseAmount.textContent = total;  
    return total;
  }  

  editExpense(element){
    // The 'element' argument will return a string, we need to convert to an integer
    let id = parseInt(element.dataset.id);
    let parent = element.parentElement.parentElement.parentElement;
    
    this.expenseList.removeChild(parent);    // Remove from DOM
    // If it's the only object in the array
    let expense = this.itemList.filter(item => {   // It works like  a loop
      return item.id === id;    // Returns an array containing only the particular item
    });                         // The index will equate to zero (0) since it's the only item in the array  

    // Show value
    this.expenseInput.value = expense[0].title;
    this.amountInput.value = expense[0].amount;

    // Remove from list
    // Create a temporary list to get the rest of the items
    let tempList = this.itemList.filter(item => {
      return item.id !== id;
    });

    this.itemList = tempList;
    this.showBalance();
  }

  deleteExpense(element){
    let id = parseInt(element.dataset.id);
    let parent = element.parentElement.parentElement.parentElement;
    this.expenseList.removeChild(parent);

    let tempList = this.itemList.filter(item => {
      return item.id !== id;
    });

    this.itemList = tempList;
    this.showBalance();
  }

}   // Class UI ends here

function eventListeners(){
  const budgetForm = document.getElementById("budget-form");
  const expenseForm = document.getElementById("expense-form");
  const expenseList = document.getElementById("expense-list");

  // Create new instance of UI class
  const ui = new UI();
 
  // Budget form submit
  budgetForm.addEventListener("submit", function(event){
    event.preventDefault();   // Prevent the form from submitting/refreshing automatically
    ui.submitBudgetForm();
  });

  // Expense form submit
  expenseForm.addEventListener("submit", function(event){
    event.preventDefault();
    ui.submitExpenseForm();
  });

  // Expense click
  expenseList.addEventListener('click', function(event){
    if(event.target.parentElement.classList.contains('edit-icon')){
      ui.editExpense(event.target.parentElement);
    }

    else if(event.target.parentElement.classList.contains('delete-icon')){
      ui.deleteExpense(event.target.parentElement);
    }
     
  });

} // Event Listeners function ends here

document.addEventListener('DOMContentLoaded', function(){
  eventListeners();
});
 