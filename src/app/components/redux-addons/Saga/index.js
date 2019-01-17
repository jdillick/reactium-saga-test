import deps from 'dependencies';
import { all } from 'redux-saga/effects';
import { sagaMiddleware } from './middleware';
import op from 'object-path';

export default () => {
    const sagas = Object.values(op.get(deps, 'allSagas', {}));
    sagaMiddleware.run(function*() {
        yield all(sagas.map(saga => saga()));
    });
};
