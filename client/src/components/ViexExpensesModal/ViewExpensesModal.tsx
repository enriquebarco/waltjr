import { Modal } from "react-bootstrap";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../../contexts/BudgetContext";
import Budget from "../../models/Budgets";
import ViewExpensesModalType from "../../models/ViewExpensesModalType";
import { currencyFormatter } from "../../utils";
import "./ViewExpensesModal.scss";

//import visual assets
const deleteIcon = require("../../assets/icons/delete.png");
const removeIcon = require("../../assets/icons/remove.png")

export default function ViewExpensesModal({ budgetId, handleClose }: ViewExpensesModalType) {

    // get the array of budget objects from the custom hook useBudgets 
    const budgets = useBudgets()?.budgets

    // get the getBudgetExpenses function from the custom hook useBudgets that holds the entire context 
    const getBudgetExpenses = useBudgets()?.getBudgetExpenses
    const deleteBudget = useBudgets()?.deleteBudget
    const deleteExpense = useBudgets()?.deleteExpense

    //get expenses
    const expenses =  getBudgetExpenses ? getBudgetExpenses(budgetId) : []

    
    //Get budget based on uncategorized ID or other
    // if the current budget ID is equal to the uncategorized budget id, return an object (which is a budget) which has the name uncategorized and the id of the uncategorized budget id
    const budget =
    UNCATEGORIZED_BUDGET_ID === budgetId
      ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID } as Budget
      : budgets?.find(b => b.id === budgetId)

  return (
    <Modal className="modal" show={budgetId !== null} onHide={handleClose}>
        {/* ^ for the show function provided by the bootstrap component, we only show the modal when there is a budget id present */}
        <div className="modal__container">
            <div className="modal__title-container">
                <h3 className="modal__title modal__title--expenses"> {budget?.name}</h3>
                 {/* if the budget id we are passing does not equal the uncategorized budget id, then we show the ability to delete the budget */}
                {budgetId !== UNCATEGORIZED_BUDGET_ID && (
                    <img src={deleteIcon} alt="remove icon" className="modal__title-icon" onClick={
                        () => {
                            if (deleteBudget && budget) {
                                deleteBudget(budget.id)
                            }
                            handleClose()
                        }
                    }/>
                )}
            </div>
            <div className="modal__expenses-container">
                {expenses.map((expense => (
                    <div className="modal__expense" key={expense.id}>
                        <h4 className="modal__expense-description">{expense.description}</h4>
                        <div className="modal__expense-wrapper">
                            <h4 className="modal__expense-amount">{currencyFormatter.format(expense.amount)}</h4>
                            <img src={removeIcon} alt="delete icon" className="modal__expense-icon" onClick={() => {
                                if(deleteExpense) {
                                    deleteExpense(expense.id)
                                    }}
                            }
                             />
                        </div>
                    </div>
                )))}
            </div>
        </div>
    </Modal>
  );
}
