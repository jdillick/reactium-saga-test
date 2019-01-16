import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

export default middlewares => {
    middlewares.push({
        name: 'saga',
        mw: sagaMiddleware,
        order: 1000,
    });

    return middlewares;
};
