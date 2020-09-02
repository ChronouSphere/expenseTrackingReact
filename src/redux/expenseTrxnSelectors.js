import { APP_CONSTANT } from '../constant';

export const getExpenseTrxnState = store => store.expenseTrxn;

export const getServerExpenseTrxnList = store => getExpenseTrxnState(store) ? getExpenseTrxnState(store).serverExpensesList : [];

export const getExpenseTrxnList = store => getExpenseTrxnState(store) ? getExpenseTrxnState(store).allTrxnIds : [];

export const getExpenseTrxnById = (store, id) => 
    getExpenseTrxnState(store) ? {...getExpenseTrxnState(store).byTrxnIds[id], id} : {};

export const getExpensesList = store => getExpenseTrxnList(store).map(id => getExpenseTrxnById(store, id));

export const getTotalExpense = (store, filterConstant) => {
    const allExpensesList = getExpensesList(store);
    switch (filterConstant) {
        case APP_CONSTANT.EXPENSE_FILTER.EXPENDITURE:
            let totalExpenditure = 0.0;
            let expensesList = allExpensesList.filter(expense => {return parseFloat(expense.content.amount) < 0;});
            
            if(expensesList.length === 0) {
                return totalExpenditure;
            }

            expensesList.forEach(expense => {
                let expenseAmount = parseFloat(expense.content.amount);
                totalExpenditure += isNaN(expenseAmount) ? 0.0 : expenseAmount;
            });

            return totalExpenditure;
        
        case APP_CONSTANT.EXPENSE_FILTER.SAVING_BALANCE:
            let totalSaving = 0.0;
            let savingList = allExpensesList.filter(expense => {return parseFloat(expense.content.amount) > 0;});
            
            if(savingList.length === 0) {
                return totalSaving;
            }

            savingList.forEach(expense => {
                let expenseAmount = parseFloat(expense.content.amount);
                totalSaving += isNaN(expenseAmount) ? 0.0 : expenseAmount;
            });

            return totalSaving;
    
        case APP_CONSTANT.EXPENSE_FILTER.NET_BALANCE:
            let netBalance = 0.0;
    
            if(allExpensesList.length === 0) {
                return netBalance;
            }

            allExpensesList.forEach(expense => {
                let expenseAmount = parseFloat(expense.content.amount);
                netBalance += isNaN(expenseAmount) ? 0.0 : expenseAmount;
            });

            return netBalance;
        
        default:
            return;
    };
};