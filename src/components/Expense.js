import React from 'react'
import { connect } from 'react-redux'
import { editTrxn } from '../redux/action';

const Expense = ({expense, editTrxn}) => {
    return (
        <>
            <li className={`money ${parseInt(expense.content.amount) > 0 ? 'plus' : 'minus'}`}>
            {expense.content.description} <span>
            {`${parseInt(expense.content.amount) >= 0 ? '$' : '-$'}`}{Math.abs(expense.content.amount)}</span>
            </li>  
        </>
    );
}

export default connect(null, {editTrxn})(Expense)
