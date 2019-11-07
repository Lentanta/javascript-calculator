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
      // Nếu chứa dấu bằng
      if (state.equation.includes("=")) {
        const value = `${state.display} = ${state.display}`; // hiển thị lại thôi
        return { ...state, equation: value };

        // Không có toán tử cuối
      } else if (state.equation != ""
        && state.equation.match(/[+\-*\/]/) != null
        && state.equation.match(/[+\-*\/]$/) == null) {

        // Nếu phép được tính ra là thập phân thì làm tròn
        const result = Number.isInteger(eval(state.equation)) ? eval(state.equation)
          : parseFloat(eval(state.equation).toFixed(5));

        let value = state.equation;
        value += ` = ${result}`; // Thếm dấu '=' cho pt
        return {
          ...state,
          display: String(result),
          equation: value
        };
      }

    case NUMBER_INPUT:
      // Nếu máy tinh hiển thị 0 hoặc có chứa dấu '='
      if (state.display === "0" || state.equation.includes("=")) {
        return {
          ...state,
          display: action.number,
          equation: action.number
        };
        // Nếu cuối phương trình là toán tử
      } else if (state.equation.match(/[+\-*\/]$/)) {
        const value = state.equation + action.number;
        return {
          ...state,
          display: action.number,
          equation: value
        };
        // Nếu cuối phương trình là số
      } else if (state.equation.match(/[0-9\.]$/)) {
        // Trong pt ko có toán tử và dấu =
        if (state.equation.match(/[+\-*\/]/) == null && !state.equation.includes("=")) {
          const value = state.equation + action.number;
          return {
            ...state,
            display: value,
            equation: value
          };
          // Khi pt có toán tử
        } else {
          return {
            ...state,
            display: state.display + action.number,
            equation: state.equation + action.number
          };
        }
      };

    case OPERATOR_INPUT:
      // Nếu trong pt đã có dấu '='
      if (state.equation.includes("=")) {
        let value = state.display;
        value += action.operator;
        return { ...state, equation: value };

      } else {
        // Pt không có toán tử ở cuối
        if (state.equation != "" && state.equation.match(/[*\-\/+]$/) == null) {
          let value = state.equation;
          value += action.operator;
          return { ...state, equation: value };
          // Pt có toán thử ở cuối
        } else if (state.equation.match(/[*\-\/+]$/) != null) {
          let value = state.equation;
          value = value.substring(0, (value.length - 1)); // bỏ toán tử đó đi
          value += action.operator; // thay bằng toán tử mới
          return { ...state, equation: value };
        }
      }

    case DECIMAL_INPUT:
      // Khi pt rỗng
      if (state.equation == "" || state.equation.includes("=")) {
        const value = '0.';
        return {
          ...state,
          display: value,
          equation: value
        };
        // Pt có toán tử ở cuối
      } else if (state.equation.match(/[+\-*\/]$/)) {
        const value = '0.';
        return {
          ...state,
          display: value,
          equation: state.equation + value
        };
        // Nếu chưa có dâu '.' nào
      } else if (!state.display.includes(".")) {
        return {
          ...state,
          display: state.display + action.decimal,
          equation: state.equation + action.decimal
        };
      }

    default:
      return state;
  }

};

export default Calculator;