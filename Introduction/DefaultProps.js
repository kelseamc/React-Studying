/*
    Parent component passing down props where one of the <Card> components is not recieving prop of color


import React from "react"
import Card from "./Card"

function App() {
    return (
        <div>
            <Card cardColor="red" />
            <Card />
            <Card cardColor="green" />
        </div>
    )
}
export default App
*/



/*    
    In Card Component
    We can set defaultProps using Card.defaultProps={}. These default props are over ridden by props that are passed in
*/

import React from "react"

function Card(props) {
    const styles = {
        backgroundColor: props.cardColor,
        height: 100,
        width: 100
    }
    
    return (
        <div style={styles}></div>
    )
}

Card.defaultProps = {
    cardColor: "blue"
}

export default Card