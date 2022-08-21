import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenceChart from "./ExpenceChart";
import "./Expense.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

 

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
       
        <ExpenceChart expenses = {filteredExpenses}/> 
        <ExpensesList items = {filteredExpenses} />
      </Card>
    </div>
  );
  };

export default Expense;
