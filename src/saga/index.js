import { all, call, put, takeEvery } from 'redux-saga/effects';
import { RENDER_EXPENSES_LIST_SERVER, GET_EXPENSES_LIST_SERVER } from '../redux/actionConstant';
import { APP_CONSTANT } from '../constant';

export function* fetchExpensesList() {
    const endpoint = APP_CONSTANT.API_PATH.MOCK_API_ENDPOINT;
    const response = yield call(fetch, endpoint);
    const data = yield response.json();
    yield put({ type: RENDER_EXPENSES_LIST_SERVER, serverExpensesList: data });
}

export function* loadExpensesList() {
    yield takeEvery(GET_EXPENSES_LIST_SERVER, fetchExpensesList);
}

export default function* rootSaga() {
    yield all([loadExpensesList()]);
}