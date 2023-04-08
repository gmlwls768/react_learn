import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";
const Expenses = (props) => {
  const [enteredSelect, setEnteredSelect] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setEnteredSelect(selectedYear);
  };
  const filter = props.items.filter((expense) => {
    const year = expense.date.getFullYear().toString();
    return year === enteredSelect;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredSelect}
          onAddExpensesFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filter} />
        <ExpenseList items={filter} />
        {/* can use  a== b? true:false */}
        {/* {filter.length === 0 && <p>No expenses found.</p>}
        {filter.length > 0 &&
          filter.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
};
export default Expenses;
