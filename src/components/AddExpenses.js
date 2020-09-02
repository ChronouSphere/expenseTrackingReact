import React from 'react'
import { connect } from "react-redux";
import { addTrxn, loadExpensesList} from "../redux/action";

class AddExpenses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            amount: 0,
            expensesList: []
        };
        this.loadExpenseFromServer();
    }

    setTransactionDesc = description => {
        this.setState({description});
    };

    setAmount = amount => {
        this.setState({amount});
    };

    handleAddNewTransactions = () => {
        if(this.state.description === '' || this.state.amount === 0) {
            // Perform shallow validation
            return;
        }
        let safeInteger = parseInt(this.state.amount); // Remove leading zero
        
        if(isNaN(safeInteger)) {
            safeInteger = 0;
        }

        this.state.amount = safeInteger; // Directly mutates
        
        this.props.addTrxn(this.state);
        
        // Reset state
        this.setState({description: ""});
        this.setState({amount: 0});
    };

    loadExpenseFromServer = () => {
        this.props.loadExpensesList();
    };

    render() {
        return (
            <div className="container">
                <h3>Add Your Saving/ Expenses <span role="img" aria-label="smiley">😃</span></h3>
                <div className="form-control">
                    <label htmlFor="text">Description</label>
                    <input type="text" value={this.state.description} onChange={(e) => this.setTransactionDesc(e.target.value)} placeholder="Transaction Details..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={this.state.amount} onChange={(e) => this.setAmount(e.target.value)} placeholder="Transaction Amount..." />
                </div>
                <button className="btn" onClick={this.handleAddNewTransactions}>ADD TRANSACTIONS</button>
            </div>
        );
    }
}

export default connect(null,{ addTrxn, loadExpensesList })(AddExpenses);


