import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';


function ExpenseItem(props){
    // function clickHandler() {}
    const [title, setTitle] = useState(props.title); 

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    };


    return (
        <Card className="flex justify-between bg-slate-500 p-4 items-center w-full mb-6">
            <div className="flex items-center">
                {/* <div className="font-bold mr-8">{props.date.toISOString()}</div> */}
                <ExpenseDate date={props.date} />
                <div className="font-semibold">{title}</div>
                
            </div>
            <div className="flex">
                <div className="border-inherit rounded-3xl bg-violet-900 p-5 text-white font-semibold">${props.amount}</div>
                <button onClick={clickHandler} className="p-2 bg-slate-900 text-white rounded-2xl">Change Title</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;