import React from 'react'
import { connect } from 'react-redux'
import Expense from './Expense';
import { getExpensesList } from '../redux/expenseTrxnSelectors';

export const ExpenseList = ({expenses}) => {
    return (
        <div>
            <h3>Transactions History</h3>
            <ul id="list" className="list">
                {expenses && expenses.length ?
                    expenses.map((expense, index) => {
                        return <Expense key={`expense-${expense.id}`} expense={expense}></Expense>;
                    })
                    : "No Transaction Added"}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    const expenses = getExpensesList(state);
    console.log('Expenses', expenses)
    return {expenses};
};

export default connect(mapStateToProps)(ExpenseList)
