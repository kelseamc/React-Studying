import React, {Component} from "react"
import {withToggler} from "./HOCs/withToggler"

class Favorite extends Component {
   
    render() {
        return (
            <div>
                <h3>Click heart to favorite</h3>
                <h1>
                    <span 
                        onClick={this.props.toggle}
                    >
                        {this.props.on ? "❤️" : "♡"}
                    </span>
                </h1>
            </div>
        ) 
    }
}

const SuperChargedFavorite = withToggler(Favorite)
export default SuperChargedFavorite