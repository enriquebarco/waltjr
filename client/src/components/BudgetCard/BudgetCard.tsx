import React from 'react'
import { ProgressBar } from "react-bootstrap";
import BudgetCardType from '../../models/BudgetCardType';
import "./BudgetCard.scss"
import { currencyFormatter, getProgressBarVariant } from "../../utils";


export const BudgetCard = ( {id, name, amount, max, handleClickButtonModalExpense, setViewExpensesModalBudgetId }: BudgetCardType) => {
  return (
    <div className="budget-card">
        <div className="budget-card__wrapper">
            <h3 className="budget-card__title">{name}</h3>
            <h4 className="budget-card__budget">{currencyFormatter.format(amount)} / {currencyFormatter.format(max)}</h4>
        </div>
        <ProgressBar 
            className="rounded-pill" 
            variant={getProgressBarVariant(amount,max)}
            min={0} 
            max={max} 
            now={amount}
            />
        <div className="budget-card__buttons-wrapper">
            <button className="budget-card__button budget-card__button--primary" onClick={() => handleClickButtonModalExpense(id)}>Add</button>
            <button className="budget-card__button" onClick={() => setViewExpensesModalBudgetId(id)}>More info</button>
        </div>
    </div>
  )
}
