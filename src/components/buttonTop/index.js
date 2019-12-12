import React from 'react';
import './style.css';

class ScrollButton extends React.Component {
  constructor() {
    super();

    this.state = {
        intervalId: 0
    };
  }
  
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render () {
      return (
        <div className="button-top" data-scroll-nav="0" onClick={this.scrollToTop.bind(this)}>
        <span>
          <i className="ti-angle-up"></i>
        </span>
      </div>
      )
   }
} 

export default ScrollButton