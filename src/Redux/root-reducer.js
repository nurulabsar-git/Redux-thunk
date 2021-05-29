import { combineReducers } from 'redux';
import cookTailReducer from './Reducer';

const rootReducer = combineReducers({
    data: cookTailReducer,
});

export default rootReducer;