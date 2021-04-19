import React from "react"
import Parent from "./Parent"

function GrandParent(props) {    

    return (
        <div>
            <p>I'm a GrandParent Component</p>
            <Parent />
            <Parent />
        </div>
    )
}

export default React.memo(GrandParent)




// Alternate way //


// import React from "react"
// import Child from "./Child"

// export default React.memo(function Parent() {

//     return (
//         <div>
//             <p>I'm a Parent Component</p>
//             <Child />
//             <Child />
//         </div>
//     )
// })




// or //


// import React, {memo} from "react"
// import GrandChild from "./GrandChild"

// function Child() {

//     return (
//         <div>
//             <p>I'm a Child Component</p>
//             <GrandChild />
//             <GrandChild />
//         </div>
//     )
// }

// export default memo(Child)



// or 

// import React, {memo} from "react"

// export default memo(function GrandChild() {

//     return (
//         <div>
//             <p>I'm a GrandChild Component</p>
//         </div>
//     )
// })


/*********** If I want to write custom areEqual function instead of the one under the hood of memo  ************/

// import React from "react"
// import Parent from "./Parent"

// function GrandParent(props) {    

//     return (
//         <div>
//             <p>I'm a GrandParent Component</p>
//             <Parent />
//             <Parent />
//         </div>
//     )
// }

// function areEqual(prevProps, nextProps) {
//   /*
//   return true if passing nextProps to render would return
//   the same result as passing prevProps to render,
//   otherwise return false
//   */
// }

// export default React.memo(GrandParent, areEqual)