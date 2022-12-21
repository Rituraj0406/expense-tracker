import React,{ useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function Expense(props){

    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear =>{
        // console.log('Expense.js');
        // console.log(selectedYear);
        setFilteredYear(selectedYear);
    }
    return (
        <div className="bg-slate-900 p-6 rounded-3xl">
            <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
            <div>
                <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
                <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem>
            </div>
        </div>
    );
}


export default Expense;