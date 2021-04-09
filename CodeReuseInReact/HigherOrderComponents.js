import React from "react"
/**
 * A function that takes a component as its first argument and returns a new component that wraps
 * the given component, providing extra capabilities to it.
 */
export function withFavoriteNumber(component) {
    const C = component
    return function(props) {
        return (
            <C favoriteNumber={42} {...props}/> // the {...props} will inlcude the props passed to the component being wrapped in this HOC
                                                // For expample, in index.js if we call the <App hello={hello}/> and pass in props we want to include
                                                // those props as well as anything we pass in from the HOC
        )
    }
}



// import React from "react"
// import {withFavoriteNumber} from "./withFavoriteNumber"

// function App(props) {
//     return (
//         <div>{props.favoriteNumber}</div>
//     )
// }

// export default withFavoriteNumber(App)