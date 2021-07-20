import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
    id: Math.random(),
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = name === "date" ? new Date(target.value) : target.value;

    setUserInput((previousState) => {
      return { ...previousState, [name]: value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onSaveExpenseData(userInput);

    setUserInput({
      title: "",
      amount: "",
      date: "",
      id: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={userInput.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="amount"
            name="amount"
            value={userInput.amount}
            min="0.01"
            step="0.01"
            onChange={handleInputChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={
              userInput.date ? userInput.date.toISOString().slice(0, 10) : ""
            }
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
