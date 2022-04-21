export const initialBudget = [
    {
        id:"subscription",
        name:"Subscriptions",
        max:75
    },
    {
        id:"groceries",
        name:"Groceries",
        max:200
    }
]

export const initialExpenses = [
    {
        amount: 15, 
        budgetId: "subscription",
        description: "Netflix",
        id: "1"
    },
    {
        amount: 13,
        budgetId: "subscription",
        description: "Spotify",
        id: "2"
    },
    {
        amount: 65,
        budgetId: "groceries",
        description: "Week 1",
        id: "3"
    },
    {
        amount: 72,
        budgetId: "groceries",
        description: "Week 2",
        id: "4"
    }
]