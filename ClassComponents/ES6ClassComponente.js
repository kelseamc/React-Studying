import React, {Component} from "react"

class NewJSFeatures extends Component {
    state = {             // don't need the constructor because you dont need to bind arrow functions to the class
        count: 0,
        greeting: "Hi",
        age: "42",
    }
    
    increment = () => {
        this.setState(prevState => ({count: prevState.count + 1}))
    }
    
    decrement = () => {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })

        // this.setState(prevState => ({count: prevState.count - 1}))
        
    }
    
    render() {
        const {count, greeting, age} = this.state       // if you want to change the name of a state value ex. const {count: number, greeting, age} = this.state 
        return (
            <div>
                <h1>{count} {greeting} {age} </h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>    
        )
    }
}

export default NewJSFeatures