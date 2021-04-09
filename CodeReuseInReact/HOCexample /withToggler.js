import React, {Component} from 'react'

class Toggler extends Component {
    state = {
        on: false
    }

    toggle = () => {
        this.setState(prevState => {
            return {
                on: !prevState.on
            }
        })
    }

    render(){
        const Component = this.props.component
        return (
            <Component on={this.state.on} toggle={this.toggle} {...props}/>
        )
    }
}



export function withToggler(component){
    return function(props){
        return(
            <Toggler component={component} {...props}/>
        )
    }
}

