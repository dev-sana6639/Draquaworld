import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore,persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import SeamlessImmutablePersistenceTransform from "redux-immutable-persistence-transform";

import rootReducers from './reducers';
import rootSagas from './sagas';

const persistConfig = {
    key: 'root',
    transforms: [SeamlessImmutablePersistenceTransform],
    storage: AsyncStorage,
    whitelist: ['auth','cart'],
};

const composeEnhancers = process.env.NODE_ENV === 'developement'
? composeWithDevTools({realtime: true})
: compose;

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducers)

export default () =>{
    const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
    const store = createStore(persistedReducer,enhancer);
    let persistor = persistStore(store);

    sagaMiddleware.run(rootSagas);

    return{store,persistor};
}

