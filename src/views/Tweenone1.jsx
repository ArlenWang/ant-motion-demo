import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import { Button } from 'antd-mobile';

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.moment = null;
    this.animation = { left: '70%', duration: 8000 };
    this.state = {
      moment: null,
      paused: true,
      reverse: false,
    };
  }

  onPause = () => {
    this.setState({
      paused: true,
      moment: null,
    });
  }

  onReverse = () => {
    this.setState({
      paused: false,
      reverse: true,
      moment: null,
    });
  }

  onRestart = () => {
    this.setState({
      paused: false,
      reverse: false,
      moment: 0,
    }, () => {
      this.setState({
        moment: null,
      });
    });
  }

  onClick = () => {
    this.setState({
      paused: false,
      reverse: false,
      moment: null,
    });
  }


  render() {
    return (
      <div>
        <TweenOne
          animation={this.animation}
          paused={this.state.paused}
          reverse={this.state.reverse}
          moment={this.state.moment}
          style={{ margin: '40px 20px' }}
          className="move-box"
        >
          <img src={require('../assets/images/product.jpg')} alt="img"/>
          </TweenOne>


        <div className="demo-buttons rowbetween"
          style={{ 
            position: 'absolute', 
            width: '90%', 
            left: '5%', 
            bottom: 25 
          }}
        >
          <Button type="primary" onClick={this.onClick}>play</Button>
          <Button type="primary" onClick={this.onPause}>pause</Button>
          <Button type="primary" onClick={this.onReverse}>reverse</Button>
          <Button type="primary" onClick={this.onRestart}>restart</Button>
        </div>
      </div>
    );
  }
}
Index.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  paused: PropTypes.bool,
};

export default Index