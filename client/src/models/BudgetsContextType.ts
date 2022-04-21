import Budget from './Budgets';
import Expense from './Expenses';

export default interface BudgetsContextType {
    budgets: Budget[],
    expenses: Expense[],
    getBudgetExpenses: ( budgetId: string ) => Expense[],
    // if we change the function return type to a more specific type such as Expense[] or Budget[] we get an error that says => void is no assignable to the respective type
    addExpense: (expense: Expense) => void,
    addBudget: (budget: Budget) => void,
    deleteBudget:(id: string ) => void,
    deleteExpense: (id: string ) => void,
}