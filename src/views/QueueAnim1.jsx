import React from 'react';
import { Button } from 'antd-mobile';
import QueueAnim from 'rc-queue-anim';
import '../assets/css/QueueAnim1.css';

class Test extends React.Component{
  state = {
    show: true
  };
  onClick = () => {
    this.setState({
      show: !this.state.show
    });
  }
  render() {
    return (
      <div className="queue-demo">
        <p className="buttons">
          <Button type="primary" onClick={this.onClick}>Switch</Button>
        </p>
        <QueueAnim className="demo-content"
          key="demo"
          type={['right', 'left']}
          ease={['easeOutQuart', 'easeInOutQuart']}>
          {this.state.show ? [
            <div className="demo-thead" key="a">
              <ul>
                <li />
                <li />
                <li />
              </ul>
            </div>,
            <div className="demo-tbody" key="b">
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          ] : null}
        </QueueAnim>
      </div>
    );
  }
};

export default Test;
