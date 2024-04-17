
// @ts-nocheck
import { Component } from "react";


class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'Ford',
            model: 'Mustang',
            color: 'red',
            year: 1789
        }
    }

    changeDetail = () => {
        this.setState({
            brand: 'Tesla',
            model: 'Model X',
            color: 'black is black',
            year: 2024
        })
    }

    componentDidMount() {
        console.log('componentDidMount') // runs after first render => retrieve data from backend
    }

    componentWillUnmount() {
        console.log('componentWillUnmount') // runs before component unmount
    }

    componentDidUpdate() {
        //runs according to the change of assistant array in useEffect
    }

    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>color: {this.state.color} - Model: {this.state.model} - Year: {this.state.year}</p>
                <button variant='primary' onClick={this.changeDetail}>change it</button>
            </div>
        )
    }
}

export default Test