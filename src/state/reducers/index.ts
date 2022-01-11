import { combineReducers } from 'redux';
import DataReducer from './data'

const reducers = combineReducers({
    state: DataReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
