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
  goTP1=()=>{
    this.props.history.push("tweenonepath1");
  }
  goTN=()=>{
    this.props.history.push("tweenonenumber");
  }
  goTSVG=()=>{
    this.props.history.push("tweenonedraw");
  }
  goPath=()=>{
    this.props.history.push("tweenonecurve");
  }
  goBezier=()=>{
    this.props.history.push("tweenonebezier");
  }
  render() {
    return (
      <div className="col_start W100">
        <Button type="primary" onClick={this.goT1} className="MT10">TweenOne动画控制</Button>
        <Button type="primary" onClick={this.goT2} className="MT10">TweenOne循环动画</Button>
        <Button type="primary" onClick={this.goA1} className="MT10">过渡css动画</Button>
        <Button type="primary" onClick={this.goQ1} className="MT10">队列进出场动画</Button>
        <Button type="primary" onClick={this.goTP1} className="MT10">TweenOne路径</Button>
        <Button type="primary" onClick={this.goTN} className="MT10">数值动画变化</Button>
        <Button type="primary" onClick={this.goTSVG} className="MT10">svg线性动画(svg路径缓动显示)</Button>
        <Button type="primary" onClick={this.goPath} className="MT10">按path路径运动</Button>
        <Button type="primary" onClick={this.goBezier} className="MT10">贝赛尔曲线动画</Button>
      </div>
    );
  }
}

export default Index