import React, {Component} from "react"

class Toggler extends Component {
    state = {
        on: this.props.defaultOnValue
    }

    static defaultProps = {  // this in case we don't pass in a prop value for defaultOnValue
        defaultOnValue: false
    }
    
    toggle = () => {
        this.setState(prevState => ({ on: !prevState.on}))
    }
    
    render() {
        return (
            <div>
                {this.props.render({
                    on: this.state.on, 
                    toggle: this.toggle
                    })}
            </div>
        )
    }
}

// Toggler.defaultProps = {
//     defaultOnValue: false
// }

export default Toggler