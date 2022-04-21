import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../../contexts/BudgetContext'
import BudgetListTypes from '../../models/BudgetListTypes'
import Expense from '../../models/Expenses'
import { currencyFormatter } from '../../utils'
import "./UncategorizedBudgetCard.scss"

export default function UncategorizedBudgetCard( {handleClickButtonModalExpense, setViewExpensesModalBudgetId}: BudgetListTypes ) {

    //Expenses Data
    const expenses = useBudgets()

    // getBudgetExpenses returns a list of expenses that have the same budgetID than the parameter by using the filter method. We then use the reducer function to add up the total amount of these expenses. This happens by saving the total and by adding each expense amount to the total and storing the total. The zero at the end signifies the starting value of total
    const amount = expenses?.getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce((total: number, expense: Expense) => total + expense.amount, 0)

    // if the amount returned from the reducer function above is zero, it means there are currently no expenses within the uncategorized budget ID and the uncategorized card should not be shown at all
    if (amount === 0) return null

  return (
    <div className="budget-card budget-card--uncategorized">
        <div className="budget-card__wrapper">
            <h3 className="budget-card__title">Uncategorized</h3>
            {/* When there are no expenses in the uncategorized budget card, this component does not load and equals null. amount is a type number or undefined, not null. Therefore, I used the nullish coalescing operator to return the right hand side operand (0) when its left hand side operand is null */}
            <h4 className="budget-card__budget">{currencyFormatter.format(amount ?? 0)}</h4>
        </div>
        <div className="budget-card__buttons-wrapper">
            <button className="budget-card__button budget-card__button--primary" onClick={() => handleClickButtonModalExpense(UNCATEGORIZED_BUDGET_ID)}>Add</button>
            <button className="budget-card__button" onClick={() => setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)}>More info</button>
        </div>
    </div>
  )
}
