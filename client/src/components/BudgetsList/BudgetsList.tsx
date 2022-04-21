import { useBudgets } from '../../contexts/BudgetContext'
import BudgetListTypes from '../../models/BudgetListTypes'
import Expense from '../../models/Expenses'
import { BudgetCard } from '../BudgetCard/BudgetCard'

export default function BudgetsList( { handleClickButtonModalExpense, setViewExpensesModalBudgetId }: BudgetListTypes) {

    // Budgets Data
    const budgets = useBudgets()?.budgets
    
    // Expenses Data
    // similar to AddExpenseModal component, we cannot use dot notation here to access the getBudgetExpenses directly because we return an error when 
    const expenses = useBudgets()

  return (
    <div className="budgets-list">
        {budgets?.map(budget => {

            // get all of my expenses, add all of the different amounts together, and return that amount. Use non-null assertion operator to tell Typescript that it can trust its not null
            const amount = expenses?.getBudgetExpenses(budget.id).reduce((total: number, expense: Expense) => total + expense.amount, 0)

            return(
                <BudgetCard
                            key={budget.id}
                            id={budget.id}
                            name={budget.name}
                            amount={amount!}
                            max={budget.max}
                            handleClickButtonModalExpense={handleClickButtonModalExpense}
                            setViewExpensesModalBudgetId={setViewExpensesModalBudgetId}
                />
            ) 
        })
        }
    </div>
  )
}
