import React,{ useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from '../Expenses/ExpensesChart';

function Expense(props){

    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    }

    // filtered the list according to selected year
    const filteredExpenses = props.items.filter(expenses => {
        return expenses.date.getFullYear().toString() === filteredYear;
    });

    return (
        <li className='list-none'>
            <div className="bg-slate-900 p-6 rounded-3xl">
                <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <div>
                    <ExpensesList items={filteredExpenses}/>
                </div>
            </div>
        </li>
    );
}


export default Expense;