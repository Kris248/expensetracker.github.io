import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteritems = props.items.filter((items)=>{
    return (
      items.date.getFullYear().toString() === filteredYear
    )
  })

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpensesList items = {filteritems}/>


        {/* SECOND METHOD */}
        {/* {expensescontent}  */}

        {/* FIRST METHOD */}

        {/* {filteritems.length ===0 && <p id='para'>No Expenses Found!</p>}
        {filteritems.length >0 &&
        filteritems.map((expense) => (
          <ExpenseItem
          key= {expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;