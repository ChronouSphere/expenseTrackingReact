import { ADD_TRXN, EDIT_TRXN, DELETE_TRXN, GET_EXPENSES_LIST_SERVER } from "./actionConstant";

let trxnId = 0;

export const addTrxn = content => ({
    type: ADD_TRXN,
    payload: {
        id: ++trxnId,
        content
    }
});

export const editTrxn = id => ({
    type: EDIT_TRXN,
    payload: {
        id: {id}
    }
});

export const deleteTrxn = id => ({
    type: DELETE_TRXN,
    payload: {
        id: {id}
    }
});

export function loadExpensesList() {
    return {
        type: GET_EXPENSES_LIST_SERVER
    };
}