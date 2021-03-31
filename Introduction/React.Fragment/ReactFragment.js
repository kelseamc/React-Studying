import React from "react"

function Grandchild() {
    return (
        <div>
            <hr />
            <h3>I'm the Grandchild component</h3>
            <p>I'm also a part of the Grandchild component</p>
        </div>
    )
}

export default Grandchild

/* 
     What happens is that this ends up polluting the DOM tree with a bunch of extra elements (<div>) that are only really there to satisfy
     the React requirement to only return a single element.

     React.Fragment doesn't create a new node (element) on the some tree. Preventing the DOM from becomming cluttered

     To use React.Fragment:
        - <React.Fragment> </React.Fragment>
        - <Fragment> </Fragment> &  import React, {Fragment} from 'react'
        - <> </>
*/


function Grandchild() {
    return (
        <>
            <hr />
            <h3>I'm the Grandchild component</h3>
            <p>I'm also a part of the Grandchild component</p>
        </>
    )
}