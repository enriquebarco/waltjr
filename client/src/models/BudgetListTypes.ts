export default interface BudgetListTypes {
    handleClickButtonModalExpense: (budgetId?: string | undefined) => void,
    setViewExpensesModalBudgetId: React.Dispatch<React.SetStateAction<any>>,
}