import { CLEAR, CALCULATE, NUMBER_INPUT, OPERATOR_INPUT, DECIMAL_INPUT } from '../../types';
const initalState = {
  display: '0',
  equation: ''
};

const Calculator = (state = initalState, action) => {
  switch (action.type) {
    case CLEAR:
      const clearState = {
        display: '0',
        equation: ''
      };
      return clearState

    case CALCULATE:
      return state

    case NUMBER_INPUT:
      if (state.display === "0") {
        return {
          ...state,
          display: action.number,
          equation: action.number
        }
      } else if {
        return {
          ...state,
          display: state.display + action.number,
          equation: state.equation + action.number,
        }
      }


    case OPERATOR_INPUT:
      return state

    case DECIMAL_INPUT:
      return state

    default:
      return state;
  }

};

export default Calculator;