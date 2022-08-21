import React, {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enterTitle, setEnterTitle] = useState('')
    const [enterAmount, setEnterAmount] = useState('')
    const [enterDate, setEnterDate] = useState('')

    const titleChangeHandler = (e) =>{
        setEnterTitle(e.target.value)
    } 
    const amountChangeHandler = (e) => {
        setEnterAmount(e.target.value)
    }
    const dateChangeHandler = (e) =>{
        setEnterDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
       const expenseData = {
        title : enterTitle,
        amount : +enterAmount,
        date : new Date(enterDate),
       };
       props.onSaveExpenseData(expenseData);
       setEnterAmount('');
       setEnterDate('');
       setEnterTitle('');
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text'value={enterTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={enterAmount} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={enterDate} onChange={dateChangeHandler}/>
            </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type = 'submit'>Add Expenses</button>
            </div>
        </form>
    </div>
  )
}

export default ExpenseForm;