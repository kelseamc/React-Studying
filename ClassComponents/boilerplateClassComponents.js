import React from 'react'

class App extends React.Component {
    constructor(){                      //where you will initialze values such as state

        super()                         // allows us to use things from the super class React.Component (setState). Need to have
        
        this.state = {
            answer: "Yes"               // this is setting the inital value of state that the componenet will have when it renders
        }

        this.handleClick = this.handleClick.bind(this) // this is how you bind a function to the class (because it uses setState)
                                                        // ** don't need to bind if you write class function like arrrow functions** 
                                                     
    }
    
    yourMethodHere() {  
    }

    handleClick(){                          //*** any time you use setState in a method/function you have to bind it to the class ****/
        this.setState((prevState) => {     //  this is how you use setState when you need/care about the previous value of state
            return {
                count: prevState.count + 1
            }

        })  
        
        // this.setState({count: 1})        This is how you set state when you just want to replace the value, but don't care about previous value
    }

    render() {                              // every class component needs a render method
                                            // best to put render logic, how something is displayed,  inside render method

        this.yourMethodHere()                       // how you'd call the function
                                                    //const style = this.yourMethodHere()  ** how you would call if your function returns something

        return (
            <div>
                <h1>{this.props.whatever}</h1> 
                                                         {/* have to use   this   to call your props */}

                <div>
                    <h1>Is state important to know? {this.state.answer}</h1>  
                                                                                {/* how you call state  */}
                    <ChildComponent answer={this.state.answer}/>      
                    {/* every time state changes, because we are passing state down to this component, this component will also rerender */}
                </div>


                <div>
                    <h1>{this.state.count}</h1>
                    <button onClick={this.handleClick}>Change!</button>
            </div>
            </div>
        )
    }
}

export default App






// import React from 'react'

// class App extends React.Component {
//     constructor(){                    

//         super()                    
        
//         this.state = {
//             answer: "Yes"               
//         }

//         this.handleClick = this.handleClick.bind(this) /
//     }
    
//     yourMethodHere() {  
//     }

//     handleClick(){                        
//         this.setState((prevState) => {    
//             return {
//                 count: prevState.count + 1
//             }
//         }) 
//     }

//     render() {                              
//         this.yourMethodHere()                     
//         return (
//             <div>
//                 <h1>{this.props.whatever}</h1> 
//                 <div>
//                     <h1>Is state important to know? {this.state.answer}</h1>                                                                          
//                     <ChildComponent answer={this.state.answer}/>
//                 </div>
//                 <div>
//                     <h1>{this.state.count}</h1>
//                     <button onClick={this.handleClick}>Change!</button>
//             </div>
//             </div>
//         )
//     }
// }

// export default App