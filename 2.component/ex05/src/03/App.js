import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.updateClock();
  }

  render() {
    return (
      <div className='clock-display'>
        <span>{this.state.ticks}</span>
        <h2>ex05 - Class Component LifeCycle Practice</h2>
        {
          this.state.ticks % 10 === 0 ?
          null :
          <Clock 
            hours={this.state.hours} 
            minutes={this.state.minutes} 
            seconds={this.state.seconds} 
            session={this.state.session} />
        }
      </div>
    );
  }

  componentDidMount() {
    this.intervalID = setInterval(() =>
    this.setState(this.updateClock()), 1000);
  }
  
  componentWillUnmount() {
    console.log('Clock', 'componentWillUnmount');
    clearInterval(this.intervalID)
  }

  updateClock() {
    const today = new Date();
    return {
      hours: today.getHours() % 12 ? today.getHours() % 12 : 12,
      minutes: today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes(),
      seconds: today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds(),
      session: today.getHours() >= 12 ? 'pm' : 'am',
      ticks: this.state ? this.state.ticks + 1 : 0
    };
  }
}