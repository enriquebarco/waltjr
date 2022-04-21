import React from 'react'
import { useBudgets } from '../../contexts/BudgetContext'
import Budget from '../../models/Budgets'
import Expense from '../../models/Expenses'
import { currencyFormatter } from '../../utils'
import "./TotalBudgetCard.scss"

export default function TotalBudgetCard() {

    //Expenses Data
    const expenses = useBudgets()?.expenses
    const budgets = useBudgets()?.budgets

    // calculate the total amount of expenses (adding up all existing expense amounts) using the reducer function
    const amount = expenses?.reduce((total: number, expense: Expense) => total + expense.amount, 0)

    // calculate the max budgets (adding up all existing budget max's) using the reducer function
    const max = budgets?.reduce((total: number, budget: Budget) => total + budget.max, 0)


    // if there is no budgets set, there is no max budget. Therefore, the total card does not show
    if (max === 0) return null

    

  return (
    <div className="budget-card budget-card--total">
        <div className="budget-card__wrapper">
            <h3 className="budget-card__title">Total</h3>
            
            <h4 className="budget-card__budget">{currencyFormatter.format(amount ?? 0)} / {currencyFormatter.format(max ?? 0)}</h4>
        </div>
        {/* When use a ternary expression to ascertain if the total amount of expenses has exceeded the total budget max. If the condition returns true, we let the user know that they have gone over budget */}
            {(amount ?? 0) >  (max ?? 0) ? 
            <h4 className="budget-card__text">You went over budget!</h4> : ""}
    </div>
  )
}
