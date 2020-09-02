import React from 'react'
import { connect } from 'react-redux'
import { getTotalExpense } from '../redux/expenseTrxnSelectors';
import { APP_CONSTANT } from '../constant';

export const ExpensesIncome = ({accountInformation}) => {
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Saving</h4>
                <p className="money plus">+${accountInformation.saving ? accountInformation.saving : 0.0}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${accountInformation.expense ? accountInformation.expense : 0.0}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    let totalSaving = getTotalExpense(state, APP_CONSTANT.EXPENSE_FILTER.SAVING_BALANCE);
    let totalExpenses = getTotalExpense(state, APP_CONSTANT.EXPENSE_FILTER.EXPENDITURE);
    return {accountInformation: {saving: Math.abs(totalSaving), expense: Math.abs(totalExpenses)}};
};

export default connect(mapStateToProps)(ExpensesIncome)
