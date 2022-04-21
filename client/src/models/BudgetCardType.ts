export default interface BudgetCardType {
    id: string,
    name: string,
    amount: number,
    max: number,
    handleClickButtonModalExpense: (budgetId?: string | undefined) => void,
    setViewExpensesModalBudgetId: React.Dispatch<React.SetStateAction<string>>,
}