import React,{ useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function Expense(props){

    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    }
    return (
        <div className="bg-slate-900 p-6 rounded-3xl">
            <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
                <div>
                    {props.items.map((expenses) => (
                        <ExpenseItem
                            key={expenses.id} 
                            title={expenses.title}
                            amount={expenses.amount}
                            date={expenses.date}
                        />
                    ))}
                </div>
        </div>
    );
}


export default Expense;