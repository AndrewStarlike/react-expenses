import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const expenses = props.expenses.map((element) => {
    return (
      <ExpenseItem
        key={element.id}
        title={element.title}
        amount={element.amount}
        date={element.date}
      />
    );
  });

  return <Card className="expenses">{expenses}</Card>;
}

export default Expenses;
