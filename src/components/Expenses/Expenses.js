import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const expenses = filteredExpenses.map((element) => {
    return (
      <ExpenseItem
        key={element.id}
        title={element.title}
        amount={element.amount}
        date={element.date}
      />
    );
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenses.length === 0 && <p>No expenses found</p>}
      {expenses.length > 0 && expenses}
    </Card>
  );
};

export default Expenses;
