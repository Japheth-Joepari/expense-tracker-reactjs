import { useState } from 'react';
import './ExpenseForm.css'

export default function ExpenseForm ({onSaveExpenseData}) {
    const [inputTitle, setInputTitle] = useState('')
    const [inputAmount, setInputAmount] = useState('')
    const [inputDate, setInputDate] = useState('')

    // Another aproach to set state
    // const [userInput, setUserInput] = useState({
    //     inputTitle: '',
    //     inputAmount: '',
    //     inputDate: ''
    // })

    const handleTitleChange = e => {
        // 1st Approach
        // setUserInput({
        //     ...userInput,
        //     inputTitle: e.target.value
        // })
        
        // 2nd Approach
        // setUserInput(prevState => {
        //     return {
        //         ...prevState, enteredTitle: e.target.value
        //     }
        // })

        setInputTitle(e.target.value)
    }

    const handleAmountChange = e => {
        // setUserInput({
        //     ...userInput,
        //     inputAmount: e.target.value
        // })
        setInputAmount(e.target.value)
    }

    const handleDateChange = e => {
        // setUserInput({
        //     ...userInput,
        //     inputDate: e.target.value
        // })
        setInputDate(e.target.value)
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        const expenseData = {
            title: inputTitle,
            amount: inputAmount,
            date: new Date(inputDate)
        }
        onSaveExpenseData(expenseData);
        setInputTitle('')
        setInputAmount('') 
        setInputDate('')
    }
    
    return (
        <form onSubmit={handleFormSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={handleTitleChange}
                    value={inputTitle} required/>
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' 
                    onChange={handleAmountChange} value={inputAmount}
                    required/>
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' 
                    onChange={handleDateChange} value={inputDate}
                    required/>
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}