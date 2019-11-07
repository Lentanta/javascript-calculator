import React from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { clear, numberInput } from '../../redux/action/calulator';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  handleNumberInput = (e) => {
    this.props.dispatch(numberInput(e.target.dataset.value))
  };

  handleOperatorInput = (e) => {

  };

  handleDecimalInput = (e) => {

  };

  handleClear = () => {
    this.props.dispatch(clear());
  };

  handleCalulate = () => {

  };

  render() {
    return (
      <div className='calculator-component'>
        <table className='calculator-container'>
          <tr>
            <th colSpan='4' className='equation'>0</th>
          </tr>
          <tr>
            <td colSpan='4' id='display' className='display'>{this.props.calculator.display}</td>
          </tr>
          <tr>
            <td className='button' id='add' data-value={'+'} onClick={this.handleOperatorInput}>+</td>
            <td className='button' id='subtract' data-value={'-'} onClick={this.handleOperatorInput}>-</td>
            <td className='button' id='multiply' data-value={'*'} onClick={this.handleOperatorInput}>x</td>
            <td className='button' id='divide' data-value={'/'} onClick={this.handleOperatorInput}>/</td>
          </tr>
          <tr>
            <td className='button' id='one' data-value={1} onClick={this.handleNumberInput}>1</td>
            <td className='button' id='two' data-value={2} onClick={this.handleNumberInput}>2</td>
            <td className='button' id='three' data-value={3} onClick={this.handleNumberInput}>3</td>
            <td rowSpan='4' id='equals' className='button--equals' onClick={this.handleCalulate}>=</td>
          </tr>
          <tr>
            <td className='button' id='four' data-value={4} onClick={this.handleNumberInput}>4</td>
            <td className='button' id='five' data-value={5} onClick={this.handleNumberInput}>5</td>
            <td className='button' id='six' data-value={6} onClick={this.handleNumberInput}>6</td>
          </tr>
          <tr>
            <td className='button' id='seven' data-value={7} onClick={this.handleNumberInput}>7</td>
            <td className='button' id='eight' data-value={8} onClick={this.handleNumberInput}>8</td>
            <td className='button' id='nine' data-value={9} onClick={this.handleNumberInput}>9</td>
          </tr>
          <tr>
            <td className='button' id='decimal' data-value={'.'} onClick={this.handleDecimalInput}>.</td>
            <td className='button' id='zero' data-value={0} onClick={this.handleNumberInput}>0</td>
            <td className='button' id='clear' onClick={this.handleClear}>C</td>
          </tr>
        </table>
      </div>
    )
  };
};

const mapStateToProps = (state) => {
  return {
    calculator: state.calculator
  };
};

export default connect(mapStateToProps, null)(Calculator);