import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.scss"

/* importing BudgetsProvider into index file so our entire application has access to the context */
import { BudgetsProvider } from "./contexts/BudgetContext";

ReactDOM.render(
  <React.StrictMode>
    <BudgetsProvider>
      <App />
    </BudgetsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

