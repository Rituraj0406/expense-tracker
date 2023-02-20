import React,{ useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function Expense(props){

    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    }

    // filtered the list according to selected year
    const filteredExpenses = props.items.filter(expenses => {
        return expenses.date.getFullYear().toString() === filteredYear;
    });


    let expensesContent = <p className='text-rose-500 font-bold text-3xl'>No Content Found.</p>;

    if(filteredExpenses.length > 0){
        expensesContent = filteredExpenses.map((expenses) => (
            <ExpenseItem
                key={expenses.id} 
                title={expenses.title}
                amount={expenses.amount}
                date={expenses.date}
            />
        ))
    }


    return (
        <div className="bg-slate-900 p-6 rounded-3xl">
            <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
                <div>
                    {expensesContent}
                    {/* {filteredExpenses.length === 0 ? <p className='text-rose-500 font-bold text-3xl'>No expenses Found</p>: filteredExpenses.map((expenses) => (
                        <ExpenseItem
                            key={expenses.id} 
                            title={expenses.title}
                            amount={expenses.amount}
                            date={expenses.date}
                        />
                    ))} */}
                </div>
        </div>
    );
}


export default Expense;