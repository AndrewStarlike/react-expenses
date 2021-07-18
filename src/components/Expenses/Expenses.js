import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
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
