import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../../contexts/BudgetContext";
import ExpenseModalType from "../../models/ExpenseModalType";
import Input from "../Input/Input";

export default function AddExpenseModal ({ show, handleClose, defaultBudgetId }: ExpenseModalType) {

  //create a variable called expense here as the entire context is accessed through the useBudgets hook. We need to access the addExpense function. To write cleaner, more consistent code I should have used dot notation to access the function directly, but then I could not guard against the null type so it complicated it more.
  const expense = useBudgets();

  // create a variable called budgets to access the budgets in our context. We use this variable when mapping out the different budgets you can select when providing the budgetId key value pair to the expense object
  const budgets = useBudgets()?.budgets;

  // I used useState to capture the value of the form input. Another option could have been useRef or even grabbing the value of the event target by creating a function that handles the entire form submit event and capturing all the values directly 
  const [description, setDescription] = useState("");

  // another form input capture
  const [amount, setAmount] = useState<number>();

  // budget id is used to set the initial default value upon page load using the useEffect hook. It is also used to capture the value of the selected input for which budget the user is seeking to tie the expense to. 
  const [budgetId, setBudgetId] = useState("");

  // useEffect here to load budget id once the value of show is changed (should be once the value of defaultBudgetId changes)
  useEffect(() => {
    setBudgetId(`${defaultBudgetId}`)

    // this is a mistake, rather than show, I should have put the defaultBudgetId value. This is causing a warning message. I wanted the defaultBudgetId change to reflect and new that once the user clicked the "add" button the modal would open and the value would be sent through, but it was a mistake. I should have followed the react rules and put defaultBudgetId
  },[show])

  //this console.log should have been removed before the final commit
  console.log(budgetId)

  // this is the function that handles the addition of a new expense
  const handleAddExpense = (event: React.SyntheticEvent) => {

    // we prevent default here because we do not want the page to refresh after the user submits a new expense. Although I am not sure if this was the best option given that when the user goes to fill out a new expense, they have to manually delete everything. 
    event.preventDefault();

    // we are guarding against a user not filling in the necessary information
    if (!description || !amount) return alert("Please fill in required fields!");

    //call the add expense function here after calling it from the useBudgets custom hook which basically provides the entire useContext object.
    expense?.addExpense({

      // id is a string because it is required based on our TypeScript interface, but we actually add the relevant id in the addExpense function using uuidv4
      id: "",
      // the rest of these destructured parameters are captured from the useState hooks, which derive from user input 
      description,
      amount,
      budgetId,
    }!);

    //handleClose is passed through as an arrow function and is simply called to set add modal to false
    handleClose()
  };

  return (
    <Modal className="modal" show={show} onHide={handleClose}>
      <form onSubmit={handleAddExpense} className="modal__form">
        <h3 className="modal__title">New Expense</h3>
        <Input
          label="Description"
          name="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          label="Amount"
          name="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.valueAsNumber)}
        />
        <div className="input">
            <label htmlFor="budgetId" className="input__label">Budget</label>
            <select defaultValue={defaultBudgetId} name="budgetId" id="budgetId" className="input__text" onChange={(e)=>{
              const selectedBudgetId = e.target.value
              setBudgetId(selectedBudgetId)
            }}>
                <option value={UNCATEGORIZED_BUDGET_ID} id={UNCATEGORIZED_BUDGET_ID}>Uncategorized</option>
                {budgets?.map(budget => (
                    <option key={budget.id} value={budget.id}>{budget.name}</option>
                ))}
            </select>
        </div>
        <div className="modal__button-container">
          <button type="submit" className="modal__button">
            Add
          </button>
        </div>
      </form>
    </Modal>
  );
}
