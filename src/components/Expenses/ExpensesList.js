import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const expenses = props.expensesList.map((element) => {
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
    <>
      {expenses.length === 0 && (
        <h2 className="expenses-list__fallback">Found no expenses</h2>
      )}
      {expenses.length > 0 && <ul className="expenses-list">{expenses}</ul>}
    </>
  );
};

export default ExpensesList;
