import React, { useState } from 'react';

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    // ALternate way 
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     selectedDate: '',
    // });
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // ALternate way 
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        // ALternate way 
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // ALternate way 
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
    };
    const dateChangeHandler = (event) => {
        setSelectedDate(event.target.value);
        // ALternate way 
        // setUserInput({
        //     ...userInput,
        //     selectedDate: event.target.value,
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(selectedDate),
        };
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setSelectedDate('')
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="bg-purple-400 py-6 px-6 rounded-3xl mb-6">
                <div className="grid grid-rows-2 gap-6 md:grid-cols-2 mb-2">
                    <div>
                        <label className="block text-sm font-medium mb-2">Title</label>
                        <input type="text" value={enteredTitle} onChange={titleChangeHandler} className="text-black text-base rounded-lg block w-full p-2.5 border-0 outline-none"/>
                    </div>
                    <div >
                        <label className="block text-sm font-medium mb-2">Amount</label>
                        <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} className="text-black text-base rounded-lg block w-full p-2.5 border-0 outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Date</label>
                        <input type="date" min='2019-01-01' max='2022-12-31' value={selectedDate} onChange={dateChangeHandler} className="text-black text-base rounded-lg block w-full p-2.5 border-0 outline-none" />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="text-white text-base bg-fuchsia-900 p-4 rounded-2xl"> Add Expense </button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;