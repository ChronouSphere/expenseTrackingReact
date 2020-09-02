import React from 'react'
import { connect } from 'react-redux'
import { editTrxn } from '../redux/action';

const ServerExpense = ({expense, editTrxn}) => {
    return (
        <>
            <li className={`money ${parseInt(expense.item_amount) > 0 ? 'plus' : 'minus'}`}>
            {expense.item_description} <span>
            {`${parseInt(expense.item_amount) >= 0 ? '$' : '-$'}`}{Math.abs(expense.item_amount)}</span>
            </li>
        </>
    );
}

export default connect(null, {editTrxn})(ServerExpense)
