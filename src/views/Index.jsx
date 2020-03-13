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

  render() {
    return (
      <div class="col_start W100">
        <Button type="primary" onClick={this.goT1} className="MT10">TweenOne动画控制</Button>
        <Button type="primary" onClick={this.goT2} className="MT10">TweenOne动画</Button>
      </div>
    );
  }
}

export default Index