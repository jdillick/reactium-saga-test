import deps from 'dependencies';
import { delay } from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

const asyncClick = function*() {
    yield delay(1000);
    yield put(deps.actions.Test.click());
};

export default function*() {
    yield takeEvery(deps.actionTypes.TEST_ASYNC_CLICK, asyncClick);
}
