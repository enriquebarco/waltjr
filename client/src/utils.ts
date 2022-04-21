// This function formats the numbers in the Budget Card component
// no need to pass a "locales" argument, since we want the default locale to be used. We put zero minimum fraction digits to remove the decimals
export const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "usd",
    style: "currency",
    minimumFractionDigits: 0
})

//This function renders the progress bar based on ratio of budgets/expenses
export const getProgressBarVariant = (amount: number, max: number) => {
    const ratio = amount / max

    // this will change the progress bar color to provide visual representation of how close a user is to the budget
    if (ratio < .5) return "primary"
    if (ratio < .75) return "warning"
    return "danger"
}