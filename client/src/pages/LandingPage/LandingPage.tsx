import React, { useEffect, useState } from "react";
import AddBudgetModal from "../../components/AddBudgetModal/AddBudgetModal";
import AddExpenseModal from "../../components/AddExpenseModal/AddExpenseModal";
import BudgetsList from "../../components/BudgetsList/BudgetsList";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import TotalBudgetCard from "../../components/TotalBudgetCard/TotalBudgetCard";
import UncategorizedBudgetCard from "../../components/UncategorizedBudgetCard/UncategorizedBudgetCard";
import ViewExpensesModal from "../../components/ViexExpensesModal/ViewExpensesModal";
import "./LandingPage.scss";

export const LandingPage: React.FC = () => {

  //state hook to show and un-show the add budget modal. When the value of this state is false, then the modal does not show
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);

  // state hook to show and un-show the add expense modal. When the value of this state is false, then the modal does not show
  const [showAddExpenseModal, setAddExpenseModal] = useState(false);

  // state hook to show and un-show the expense modal that is populated to a relevant budget. When the value of this state is null, then the modal does not show. When the state value is a string referencing a Budget id, then the modal does show. We then use this state value to populate the category of which the expenses belong to. 

  // the setState function is called twice throughout the application. 
          //First, when clicking the "More Information" button from a budget card. The function sets the state to the current budget card id
          //Second, when clicking the "More Information" button on the uncategorized budget card. The function sets the state to the uncategorized id
  // once the state value is populated (going from null to the string of the relevant budget id) the ViewExpenseModal is opened because the "show" function which is integrated in the bootstrap modal component is set to true when there IS a budget id (when budget id !== null)
  
  // Therefore, we need to pass null or a string. However, when I set the useState type to <string | null>, it does not allow me to send either null or string through when rendering <ViewExpenseModal> and passing through the budgetId prop. Not entirely sure how to make this code work with TypeScript
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState(null!);

  //state hook to render the relevant budget within the category section. The initial value of the state is an empty string until the budget id is set.
  
  // the setState function is called through the handleClickButtonModalExpense, which is called every time the "add" button is clicked (in the page header, budget card, and uncategorized budget card).
  // once the state value is populated, it passes to the AddExpenseModal as a default value so the user can automatically add an expense to the relevant budget without having to select it in the dropdown menu
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState<string>("");

  // load title on component render
  useEffect(() => {
    document.title = "Walt Jr"
  },[]);

  const handleClickButtonModalBudget = () => {
    setShowAddBudgetModal(true);
  };

  // this function is called to open all the add expense modals. The id is used to render the relevant category by setting the id of the budget to the default id 
  const handleClickButtonModalExpense = (budgetId?: string) => {
    if (budgetId) {
      setAddExpenseModal(true);
      setAddExpenseModalBudgetId(budgetId);
    }
  };

  return (
    <div className="landing-page">
      <PageHeader
        handleClickButtonModalBudget={handleClickButtonModalBudget}
        handleClickButtonModalExpense={handleClickButtonModalExpense}
      />
      <BudgetsList
        setViewExpensesModalBudgetId={setViewExpensesModalBudgetId}
        handleClickButtonModalExpense={handleClickButtonModalExpense}
      />
      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => {
          setShowAddBudgetModal(false);
        }}
      />
      <AddExpenseModal
        show={showAddExpenseModal}
        defaultBudgetId={addExpenseModalBudgetId}
        handleClose={() => {
          setAddExpenseModal(false);
        }}
      />
      <UncategorizedBudgetCard
        setViewExpensesModalBudgetId={setViewExpensesModalBudgetId}
        handleClickButtonModalExpense={handleClickButtonModalExpense}
      />
      <TotalBudgetCard />
      <ViewExpensesModal
        budgetId={viewExpensesModalBudgetId}
        handleClose={() => setViewExpensesModalBudgetId(null!)}
      />
    </div>
  );
};
