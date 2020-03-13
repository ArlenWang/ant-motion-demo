import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import '../assets/css/OverPack.css';
class OverPackMC extends React.Component {
  render() {
    return (<div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      <OverPack style={{ overflow: 'hidden', height: 200 }} >
        <TweenOne key="0" animation={{ opacity: 1 }}
          className="code-box-shape"
          style={{ opacity: 0, marginBottom: 10 }}
        />
        <QueueAnim key="queue"
          leaveReverse
          style={{ float: 'left', position: 'relative', left: '50%', marginLeft: -165 }}
        >
          <div key="a" className="code-box-shape queue-anim-demo" />
          <div key="b" className="code-box-shape queue-anim-demo" />
          <div key="c" className="code-box-shape queue-anim-demo" />
          <div key="d" className="code-box-shape queue-anim-demo" />
          <div key="e" className="code-box-shape queue-anim-demo" />
          <div key="f" className="code-box-shape queue-anim-demo" />
        </QueueAnim>
      </OverPack>
      <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      
      </div>
    );
  }
}
export default OverPackMC;