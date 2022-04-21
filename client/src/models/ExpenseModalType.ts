export default interface ExpenseModalType {
    show: boolean,
    handleClose: () => void,
    defaultBudgetId?: string,
}