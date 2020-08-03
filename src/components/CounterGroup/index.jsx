import React from 'react'
import Counter from '../Counter';
import { unmountCounter } from '../../action'

class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { size: 0, totalCount: 0 };
    }

    handleResize = (event) => {
        this.setState({
            size: event.target.value ? parseInt(event.target.value) : 0,
            totalCount: 0
        })
    }

    unmountCounter = (value) => {
        this.props.store.dispatch(unmountCounter(value ? parseInt(value) : 0))
    }

    render() {
        const initArray = [...Array(this.state.size).keys()];

        return (
            <div>
                <div>
                    <label>
                        Group size:
                    <input defaultValue={0} onBlur={this.handleResize} />
                    </label>
                </div>
                <div>
                    <label>
                        Total Number: {this.props.store.getState()}
                    </label>
                </div>
                {
                    initArray.map(key => <Counter
                        onIncrement={() => this.props.store.dispatch({ type: 'INCREMENT' })}
                        onDecrement={() => this.props.store.dispatch({ type: 'DECREMENT' })}
                        unmountCounter={this.unmountCounter}
                        key={key}
                    />)
                }
            </div>
        )
    }
}

export default CounterGroup