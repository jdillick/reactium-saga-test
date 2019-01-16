import 'core-js/modules/es6.string.starts-with';
import 'core-js/modules/es7.object.entries.js';
import {
    // call,
    // takeEvery,
    // takeLatest,
    put,
} from 'redux-saga/effects';

import { App, AppError } from 'reactium-core/app';
import { sagaMiddleware } from './components/redux-addons/Saga/middleware';

let render = App;

function* mySaga() {
    yield put({ type: 'SOME_ORDINARY_ACTION' });
}

sagaMiddleware(mySaga);

/**
 * @description Initialize the app.
 */
if (module.hot) {
    render = () => {
        try {
            App();
        } catch (error) {
            AppError(error);
        }
    };

    module.hot.accept(
        ['../.././.core/dependencies/index.js', '../.././.core/app.js'],
        () => {
            window.location.reload();
        },
    );
}

render();
