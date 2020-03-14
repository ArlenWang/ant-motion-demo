import React, { Component } from 'react';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Animate from 'rc-animate';
import '../assets/css/OverPack.css';

const Link = ScrollAnim.Link;
const Element = ScrollAnim.Element;
const ScrollOverPack = ScrollAnim.OverPack;
const EventListener = ScrollAnim.Event;

class Demo extends Component {
  componentDidMount() {
    // 添加改变窗口事件,可加setTimeout
    EventListener.addEventListener('resize.userResize', this.barAnimate.bind(this));
  }

  onFocus = (e) => {
    console.log(e, 'focus');
    this.dom = e.target;
    this.barAnimate();
  }

  onBlur = (e) => {
    console.log(e, 'blur');
  }

  onChange = (e) => {
    console.log(e);
  }

  barAnimate = () => {
    if (!this.dom) {
      return;
    }
    const bar = this.bar;
    bar.style.left = `${this.dom.getBoundingClientRect().left}px`;
  }

  render() {
    return (<div>
      <div className="nav">
        <div className="logo">
          <p>Ant Motion</p>
        </div>
        <div className="nav-wap">
          <Link className="nav-list" to="page0" showHeightActive={['50%', '10%']}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            toHash
          >
            Example
          </Link>
          <Link className="nav-list" to="page1" showHeightActive={['10%', '60%']} toShowHeight
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            toHash
          >
            Example2
          </Link>
          <Link className="nav-list" to="page2" showHeightActive={['60%', '50%']} toShowHeight
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            toHash
          >
            Example3
          </Link>
          <Link className="nav-list" to="page3" offsetTop={100}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            toHash
          >
            Example4
          </Link>
          <div ref={(c) => { this.bar = c; }} className="nav-bar" />
        </div>
      </div>
      <Element className="pack-page page0" id="page0" onChange={this.onChange}>
        <QueueAnim className="home-title">
          <div className="page-title" key="title">
            <p>rc-scroll</p>
          </div>
          <div className="page-description" key="c">
            <p>The link demo</p>
          </div>
        </QueueAnim>
      </Element>
      <ScrollOverPack id="page1" className="page1">
        <TweenOne className="tween-one" key="0" animation={{ opacity: 1 }}>
          默认进入与出场
        </TweenOne>
        <QueueAnim key="1">
          <div key="0" className="demo-content" />
          <div key="1" className="demo-content" style={{ backgroundColor: '#F38EAD' }} />
          <div key="2" className="demo-content" />
          <div key="3" className="demo-content" />
        </QueueAnim>
      </ScrollOverPack>

      <ScrollOverPack
        className="pack-page page2"
        style={{ backgroundColor: '#0098CE' }}
        always={false}
        id="page2"
      >
        <div className="page2-title">只进入一次</div>
        <Animate key="0" transitionName="fade" transitionAppear>
          <div className="demo-content2" />
        </Animate>
        <TweenOne
          className="demo-content2"
          animation={{ y: 0, opacity: 1 }}
          key="1"
          style={{ transform: 'translateY(100px)', opacity: 0 }}
        />
      </ScrollOverPack>

      <ScrollOverPack
        className="pack-page page3"
        style={{ backgroundColor: '#174270' }}
        playScale={0.8}
        id="page3"
      >
        <TweenOne animation={{ opacity: 1 }} style={{ opacity: 0 }} key="title"
          className="page2-title"
        >
          在页面80％时进入
        </TweenOne>
        <Animate key="0" transitionName="fade" transitionAppear>
          <div className="demo-content" />
        </Animate>
        <TweenOne
          className="demo-content"
          animation={{ y: 0, opacity: 1 }}
          key="1"
          style={{ transform: 'translateY(100px)', opacity: 0 }}
        />
      </ScrollOverPack>
    </div>);
  }
}
export default Demo;
