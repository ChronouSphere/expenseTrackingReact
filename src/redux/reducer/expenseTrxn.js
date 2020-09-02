import { ADD_TRXN, DELETE_TRXN, RENDER_EXPENSES_LIST_SERVER } from "../actionConstant";

const initialState = {
    allTrxnIds: [],
    byTrxnIds: {},
    serverExpensesList: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TRXN: {
            const { id, content } = action.payload;
            return {
                ...state,
                allTrxnIds: [...state.allTrxnIds, id],
                byTrxnIds: {
                    ...state.byTrxnIds,
                    [id]: {
                        content,
                        is_deleted: false
                    }
                }
            };
        }

        case DELETE_TRXN: {
            const { id } = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        is_deleted: !state.byIds[id].is_deleted
                    }
                }
            };
        }

        case RENDER_EXPENSES_LIST_SERVER: {
            console.log('Server List obtained', action.serverExpensesList);
            return {
                ...state,
                serverExpensesList: action.serverExpensesList
            };
        }

        default:
            return state;
    }
};