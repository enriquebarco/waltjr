import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UNCATEGORIZED_BUDGET_ID } from '../../contexts/BudgetContext';
import PageHeaderTypes from '../../models/PageHeaderTypes';
import "./PageHeader.scss";

//import visual assets
const Logo = require('../../assets/icons/wallet.png');


export const PageHeader = ({ handleClickButtonModalBudget, handleClickButtonModalExpense }: PageHeaderTypes ) => {

// this state hook is used to show or un-show the hidden CTA section where a user can add a budget or expense
const [isOpen, setIsOpen] = useState(false)


  return (
    <header className="header">
      <div className="header__main">
          <Link className="header__links--logo" to={"/"}>
            <img className="header__logo-image" src={Logo} alt="wallet icon" />
          </Link>
          <div className={"header__button-area"}>
                <label className="header__button-label" htmlFor="check" >
                  <input className="header__input" type="checkbox" id="check"  onClick={() => setIsOpen(!isOpen)}/> 
                  <span className='header__button-bar header__button-bar--1'></span>
                  <span className='header__button-bar header__button-bar--2'></span>
                  <span className='header__button-bar header__button-bar--3'></span>
                </label>
          </div>
        </div>

      {isOpen ? 
        <div className="header__hidden-CTA animate__animated animate__fadeIn">
              <button className="header__button" onClick={handleClickButtonModalBudget}>Add Budget</button>
              <button className="header__button" onClick={()=> handleClickButtonModalExpense(UNCATEGORIZED_BUDGET_ID)}>Add Expense</button>
          </div> : ""}
    </header>
  )
}
