import React from 'react';
import PropTypes from 'prop-types';
import { InputNumber, Button, Checkbox } from 'antd';
import TweenOne from 'rc-tween-one';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';

TweenOne.plugins.push(Children);

class TweenoneNumber extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 10000,
      animation: null,
      formatMoney: false,
    };
  }

  onChangeMoney = (e) => {
    this.setState({
      formatMoney: e.target.checked
    })
  }

  onClick = () => {
    const { value, formatMoney } = this.state;
    this.setState({
      animation: {
        Children: { 
          value: typeof value === 'number' ? value : 10000,floatLength: 2,
          formatMoney, 
        }, 
        duration: 1000,
      }
    })
  }

  onChange = (value) => {
    console.log(value)
    this.setState({
      value,
    });
  }

  render() {
    return (
      <div 
        style={{ 
          display: 'flex', 
          height: '100%',
          minHeight: '220px', 
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div style={{ width: '100%' }}>
          <TweenOne
            animation={this.state.animation}
            style={{ fontSize: 56, marginBottom: 12 }}
          >
            0
          </TweenOne>
          <InputNumber 
            defaultValue={this.state.value}
            onChange={this.onChange}
          />
          <Checkbox style={{ margin: '0 16px' }} onChange={this.onChangeMoney}> to money</Checkbox>
          <Button
            type="primary"
            style={{ marginBottom: 32 }}
            onClick={this.onClick}
          >
            Start
          </Button>
        </div>
      </div>
    );
  }
}
TweenoneNumber.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  paused: PropTypes.bool,
};
export default TweenoneNumber;