import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import { Button } from 'antd-mobile';

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.moment = null;
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

  onStart = () => {
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
          animation={{ x: 800, duration: 3000, ease: 'linear', rotate: 360,transformOrigin:'0 0' }}
          paused={this.state.paused}
          reverse={this.state.reverse}
          moment={this.state.moment}
          style={{ width:'285px',height:'285px' }}
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
          <Button type="primary" onClick={this.onStart}>play</Button>
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

export default Index;