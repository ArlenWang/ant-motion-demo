import React from 'react';
import { Button } from 'antd-mobile';

class Index extends React.Component {

  // constructor(props) {
  //   super(props);
    
  // }

  goT1=()=>{
    this.props.history.push("tweenone1");
  }
  goT2=()=>{
    this.props.history.push("tweenone2");
  }
  goA1=()=>{
    this.props.history.push("animate1");
  }
  goQ1=()=>{
    this.props.history.push("queueAnim1");
  }
  render() {
    return (
      <div className="col_start W100">
        <Button type="primary" onClick={this.goT1} className="MT10">TweenOne动画控制</Button>
        <Button type="primary" onClick={this.goT2} className="MT10">TweenOne循环动画</Button>
        <Button type="primary" onClick={this.goA1} className="MT10">过渡css动画</Button>
        <Button type="primary" onClick={this.goQ1} className="MT10">队列进出场动画</Button>
      </div>
    );
  }
}

export default Index