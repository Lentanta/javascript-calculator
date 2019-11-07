import { CLEAR, CALCULATE, NUMBER_INPUT, OPERATOR_INPUT, DECIMAL_INPUT } from '../types';

export const clear = () => {
  return {
    type: CLEAR
  };
};

export const calculate = () => {
  return {
    type: CALCULATE,
  };
};

export const numberInput = (number) => {
  return {
    type: NUMBER_INPUT,
    number
  };
};

export const operatorInput = (operator) => {
  return {
    type: OPERATOR_INPUT,
    operator
  };
};

export const decimalInput = (decimal) => {
  return {
    type: DECIMAL_INPUT,
    decimal
  };
};


