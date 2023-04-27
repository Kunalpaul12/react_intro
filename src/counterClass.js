import React from "react";
import { connect } from "react-redux";

class CounterClass extends React.Component {
  render() {
    const { counter, increment, decrement } = this.props;
    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={() => increment()}>+</button>
        <button onClick={() => decrement()}>-</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: function () {
      dispatch({ type: "increment" });
    },
    decrement: function () {
      dispatch({ type: "decrement" });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
