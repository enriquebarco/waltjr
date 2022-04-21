import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";
import Budget from "../models/Budgets";
import BudgetsContextProviderProps from "../models/BudgetsContextProviderProps";
import BudgetsContextType from "../models/BudgetsContextType";
import Expense from "../models/Expenses";
import { initialBudget, initialExpenses } from "./InitialData/InitialData";

// we initially do not have any context (which is a mistake in terms of typescript - it leads to type guarding against null & undefined for a majority of the app). 

// from react documentation: The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This default value can be helpful for testing components in isolation without wrapping them. Note: passing undefined as a Provider value does not cause consuming components to use defaultValue.

const BudgetsContext = React.createContext<BudgetsContextType | null>(null);


// this is the budget id for the uncategorized budget component
export const UNCATEGORIZED_BUDGET_ID = "Uncategorized";

// custom hook that allows us to access the context anywhere throughout our application (including functions, budgets, and expenses)
export const useBudgets = () => {
  return useContext(BudgetsContext);
};


// this function wraps all of the logic for handling state, updating state, and pushing out those different values to all of the children. Which in this case the children is the entire application
export const BudgetsProvider = ({ children }: BudgetsContextProviderProps) => {

  // useState hook called to set our budgets within local storage (initial value is imported as an array of budget objects)
  const [budgets, setBudgets] = useLocalStorage<Budget[]>(
    "budget",
    initialBudget
  );

  // useState hook called to set our expenses within local storage (initial value is imported as an array of expense objects)
  const [expenses, setExpenses] = useLocalStorage<Expense[]>(
    "expense",
    initialExpenses
  );

  // function to get expenses from a specific budget (will be used when populating the data for a specific budget)
  function getBudgetExpenses( budgetId: string ) {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  }

  // function used to add an expense. When considering typescript, this should have originally been an expense object. its not dry to have redefined the parameters
  // we destructure the object here because we simply pass a budget object when calling the function rather than budget.description, budget.amount etc.
  function addExpense({ description, amount, budgetId }: Expense) {
    setExpenses((prevExpenses) => {
      // take all previous expenses from array and add a new expense with a unique id, amount, and description

      // potential to have created a budget class, and then created a new object from that class here
      return [...prevExpenses, {id: uuidv4(), description, amount, budgetId }];
    });
  }

  // similar to add expense
  function addBudget({ name, max }: Budget) {
    setBudgets((prevBudgets) => {
      //check if the budget the user is trying to add already exists, return the same list if it does
      if (prevBudgets.find((budget) => budget.name === name)) {
        return prevBudgets;
      }

      // take all previous budgets from array and add a new budget with a unique id, name, and max

      // potential to have created an expense class, and then created a new object from that class here
      return [...prevBudgets, { name, max, id: uuidv4() }];
    });
  }

  // function to delete a budget
  function deleteBudget( id:string ) {
    //move all deleted expenses to the uncategorized section
    setExpenses(prevExpenses => {
      return prevExpenses.map(expense => {
        // if budget id is equal to current id, it is not the correct budget
        if (expense.budgetId !== id) return expense

        //if correct budget id, take all expenses within budget and keep everything the same except for changing the budget id to uncategorized
        return {...expense, budgetId: UNCATEGORIZED_BUDGET_ID}
      })
    })

    setBudgets((prevBudgets) => {
      return prevBudgets.filter((budget) => budget.id !== id);
    });
  }

  //function to delete an expense
  function deleteExpense( id:string ) {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== id);
    });
  }

  return (
    <BudgetsContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense,
      }}
    >
      {children}
    </BudgetsContext.Provider>
  );
};
