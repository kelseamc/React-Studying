
/*
import React from "react"
import CTA from "./CTA"

function App() {
    return (
        <div>
            // instead of <CTA />

            <CTA>
                <h1>This is an important CTA</h1>
                <button>Click me now or you'll miss out!</button>
            </CTA>
            
            <CTA>
                <form>
                    <input type="email" placeholder="Enter email address here"/>
                    <br />
                    <button>Submit</button>
                </form>
            </CTA>
        </div>
    )
}
export default App
*/


import React from "react"

function CTA(props) {
    return (
        <div className="border">
            {props.children}
        </div>
    )
}

export default CTA

/*
    *** Using props.children ***
        In the example above, the CTA componenet renders a border around whatever is inside the div. To make this component more reuseable
        in the App comonenet, instead of using a self closing tag, <CTA />, we can use <CTA> </<CTA>. In the CTA component we then use
        props.children, and this renders everything inside the <CTA> </<CTA> tags in App. This allows you to put different kinds of elements
        inside the CTA component making the component more reuseable. 

    * you can still pass down props with opening and closing tags <CTA position="right"> </<CTA>


    When to use props.children?
        - If you want the person using your component to have full control over what is being diplayed inside the comonent
        - otherwise, if for example you always want the component to display an image and and title use props
        - if you are just trying to pass a piece of data down, props is the way to go!

        Example: you have a side bar, but you want the content in the side bar to change depending on what page you are on. You'd make a sidebar
                 component and have CSS styling it to the side of the page, but then you leave it up to the component that is rendering it
                 to determine what elements go inside that side bar


*/