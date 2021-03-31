/*

One way to add some validation to your components is by Prop Types. It allows you to specify that incoming props should be of a specific 
data type

React moved this functionality to a seperate library https://www.npmjs.com/package/prop-types . Need to intall library to use

npm install --save prop-types
import PropTypes from 'prop-types'
Card.propTypes = {                                      ** note that the p in propTypes is lower case and not capital P from the import **
        cardColor: PropTypes.string.isRequired          ** calling on the import PropTypes here ** 
                                                        ** .isRequired will give warning telling you it is required **
    } 

 React Docs on PropTypes:
https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes


This is a development tool => gives a warning but won't show up when deploy and npm build
*/

/*

                                                                    Parent Component 
                                                                    
import React from "react"
import Card from "./Card"

function App() {
    return (
        <div>
            <Card cardColor="red" height={200} width={200} />
            <Card cardColor="purple" />
            <Card cardColor="green" />
        </div>
    )
}

export default App

*/


import React from "react"
import PropTypes from "prop-types"

function Card(props) {
    const styles = {
        backgroundColor: props.cardColor,
        height: props.height,
        width: props.width
    }
    
    return (
        <div style={styles}></div>
    )
}

Card.propTypes = {
    cardColor: PropTypes.oneOf(["red", "blue", "green", "purple"]).isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number
}

Card.defaultProps = {
    height: 100,
    width: 100
}

export default Card