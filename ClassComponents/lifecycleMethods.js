import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {}
    }
    
    componentDidMount(){
        // can get the the data we need to correctly display
    }

    componentWillReceiveProps(nextProps){ // ****** has been deprecated by React ***** 
        if (nextProps.whatever !== this.props.whatever) {
            // do something important here
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        // return true if want it to update
        // return false if not
    }

    componentWillUnmount() {
        // remove event listener
        // teardown or cleanup your code before your component disappears
    }

    static getDerivedStateFromProps() {
        // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
        // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    }
    
    getSnapshotBeforeUpdate() {
        // create a backup of the current way things are
        // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
    }
    
    componentDidUpdate(){
        // something you want to run everytime the componenet rerenders
        // ex. change the color of element when button is clicked
    }
    render() {
        return (
            <div>
                Code goes here
            </div>
        )
    }
}

export default App

/*
 => render() method is technically a lifecycle method
        - this can be called manytimes such as after state has been changed

=> componentDidMount() = the very first time the componenet renders, React will run this method
        - this will only run once while the component shows up on the screen. A rerender, which changes the way the component is displayed 
          does not re-run the componentDidMount() method. This is bacause when a rerender occurs, the componenet does not actually un-mount 
          and re-mount
        - can be useful if you are making a request to an API or external source

=> shouldComponentUpdate() = used to determine whether or not the component needs to rerender. 
        - takes in two parameters >>> nextProps and nextState

=> componentWillUnmount() = do somekind of 'clean up' that could otherwise cause clutter on the DOM or in your application

=> getDerivedStateFromProps() = ** must include  static  before method ** takes in props and state and return updated state based upon the props
        - for rare moment when your component is taking in props from it's parent and set it's own state based on those props
        - React discourages the use of this method -- it has a lot of potential bugs

=> getSnapshotBeforeUpdate() = allows you to create a backup of the current way things are (some kind of data like an object)
        - not super common

=> componentDidUpdate() = runs everytime the component rerenders -- mostly due to a change
        - accepts two parameters >>> prevProps and prevState
        - you want to set a conditional if you are going to setState inside this method, otherwise it will cause and infinite loop

****** Has Been Deprecated ********

=> componentWillReceiveProps() = this component could be receiving props from a parent componenet, and everytime this component is revieving props, 
                                 it will run this method
        - not only will it run the very first time it is mounted, but everytime a parent component decides to hand prop to a child component
        - takes a parameter called 'nextProps' 
        - use to check if new props being passed down is different the previous props passed down

=> componentWillMount()

=> componentWillUpdate()
*/
