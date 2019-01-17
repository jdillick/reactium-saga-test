import deps from 'dependencies';
import { takeEvery } from 'redux-saga/effects';
import { sagaMiddleware } from './middleware';

export default () => {
    sagaMiddleware.run(function*() {
        yield takeEvery(
            deps.actionTypes.TEST_ASYNC_CLICK,
            deps.actions.Test.sagas.click,
        );
    });
};
