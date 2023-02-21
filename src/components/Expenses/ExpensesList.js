import React from 'react';
import ExpenseItem from './ExpenseItem';


const ExpensesList = (props) => {
    if(props.items.length === 0){
        return <h2 className='text-center text-white text-2xl font-bold'>Found no expenses.</h2>
    }

    return (
        <ul className=''>
            {props.items.map((expenses) => (
                <ExpenseItem
                    key={expenses.id} 
                    title={expenses.title}
                    amount={expenses.amount}
                    date={expenses.date}
                />
            ))}
        </ul>
    );
};

export default ExpensesList;