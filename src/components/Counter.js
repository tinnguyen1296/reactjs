import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    let { timer } = this.props || 1000;
    this.intervalID = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, timer);
  }

  componentDidUpdate() {
    const { maxValue } = this.props;
    if(this.state.count === maxValue) {
      clearInterval(this.intervalID);
    }
  }
  componentWillUnmount() {
      clearInterval(this.intervalID);
  }
  render() {
    return <div>{this.props.children(this.state.count)}</div>
  }
}
