import React from 'react'
import { connect } from 'react-redux'
import { getTotalExpense } from '../redux/expenseTrxnSelectors';
import { APP_CONSTANT } from '../constant';

export const AccountBalance = ({netBalance}) => {
    return (
        <div>
            <h4>Your Balance</h4>
            <h1 id="balance">{netBalance >= 0 ? '$':'-$'}{Math.abs(netBalance)}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    const netBalance = getTotalExpense(state, APP_CONSTANT.EXPENSE_FILTER.NET_BALANCE);
    return {netBalance};
};

export default connect(mapStateToProps)(AccountBalance)

