import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: 0 }
    }

    onIncrease = () => {
        this.setState((prevState) => ({
            value: prevState.value + 1
        }))
        this.props.onIncrement()
    }

    onDecrease = () => {
        this.setState((prevState) => ({
            value: prevState.value - 1
        }))
        this.props.onDecrement()
    }

    render() {
        return (
            <div>
                <button onClick={this.onDecrease}>-</button>
                <mark>{this.state.value}</mark>
                <button onClick={this.onIncrease}>+</button>
            </div>
        )
    }

    componentWillUnmount() {
        this.props.unmountCounter(this.state.value)
    }
}

export default Counter