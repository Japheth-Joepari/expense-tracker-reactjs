import './NewExpense.css'
import ExpenseForm from './ExpenseForm.js'

export default function NewExpense({onAddExpenshandler}) {
    // passing props from child to parent
    const handleSavedData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        onAddExpenshandler(expenseData)
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={handleSavedData}/>
        </div>
    )
}       