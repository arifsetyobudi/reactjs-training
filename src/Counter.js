import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        const count = this.state.count;
        this.setState({ count: count + 1 });
    }

    decrement() {
        const count = this.state.count;
        this.setState({ count: count - 1 });
    }

    render() {
        return <div>
            Counter : {this.state.count}<br />
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
        </div>;
    }
}

export default Counter;