import op from 'object-path';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

export default middlewares => {
    const sagaMiddleware = createSagaMiddleware();

    middlewares.push({
        name: 'saga',
        mw: sagaMiddleware,
        order: 1000,

        post({ store }) {
            // Setup DDD Sagas after store initializes
            let unsubscribe = store.subscribe(() => {
                function* rootSaga() {
                    const allSagas = op.get(
                        require('manifest').get(),
                        'allSagas',
                        {},
                    );
                    yield all(Object.values(allSagas).map(saga => saga()));
                }

                sagaMiddleware.run(rootSaga);
                unsubscribe();
            });
        },
    });

    return middlewares;
};
