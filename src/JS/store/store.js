import {createStore , applyMiddleware , compose} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "../reducers/index"
import { nodeEnv } from '~/utils/config';

const composeEnhancers = (nodeEnv !== 'production' &&
typeof window !== 'undefined' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)