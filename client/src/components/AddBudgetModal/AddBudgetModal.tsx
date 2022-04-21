import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useBudgets } from "../../contexts/BudgetContext";
import BudgetModalType from "../../models/BudgetModalType";
import Input from "../Input/Input";
import "./AddBudgetModal.scss";

export default function AddBudgetModal({ show, handleClose }: BudgetModalType) {
  const budget = useBudgets();
  const [name, setName] = useState("");
  const [max, setMax] = useState<number>();

  const handleAddBudget = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!name || !max) return alert("Please fill in required fields!");

    budget?.addBudget({
      id: "",
      name,
      max,
    });

    handleClose()
  };

  return (
    <Modal className="modal" show={show} onHide={handleClose}>
      <form onSubmit={handleAddBudget} className="modal__form">
        <h3 className="modal__title">Add Budget</h3>
        <Input
          label="Name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Maximum Spend"
          name="max"
          type="number"
          value={max}
          onChange={(e) => setMax(e.target.valueAsNumber)}
        />
        <div className="modal__button-container">
          <button type="submit" className="modal__button">
            Add
          </button>
        </div>
      </form>
    </Modal>
  );
}
