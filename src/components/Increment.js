import React, { Component } from "react";
import "./Increment.css";

class inputPage extends Component {
  state = {
    value: this.props.qty
  }

  decrease = () => {
    this.props.onUpdateCartQty(this.props.id, this.state.value - 1)
    this.setState({ value: this.state.value - 1 });
  }

  increase = () => {
    this.props.onUpdateCartQty(this.props.id, this.state.value + 1)
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return (
        <div className="def-number-input number-input">
          <button onClick={this.decrease} className="minus"></button>
          <input className="quantity" name="quantity" value={this.state.value} onChange={()=> console.log('change')}
          type="number" />
          <button onClick={this.increase} className="plus"></button>
        </div>
      );
  }
}

export default inputPage;