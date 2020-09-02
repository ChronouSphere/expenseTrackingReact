import React from 'react'
import { connect } from 'react-redux'
import { getServerExpenseTrxnList } from '../redux/expenseTrxnSelectors';
import ServerExpense from './ServerExpense';

export const ExpenseListServer = ({serverExpenses}) => {
    return (
        <div>
            <div>
                <h3>Transactions History</h3>
                <ul id="list" className="list">
                    {serverExpenses && serverExpenses.length ?
                        serverExpenses.map((expense, index) => {
                            return <ServerExpense key={`expense-${expense.id}`} expense={expense}></ServerExpense>;
                        })
                        : "No Transaction Added"}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const serverExpenses = getServerExpenseTrxnList(state);
    return {serverExpenses};
};

export default connect(mapStateToProps)(ExpenseListServer)
