import { combineReducers } from 'redux';
import calculatorReducer from './calculatorReducer';

const rootReducer = combineReducers({
    calculator: calculatorReducer
});

export default rootReducer;