import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isGuest: true
        }
    }
    
    render() {
        /* if/else Condition start ----------------*/

            // if(this.state.isGuest){
            //     return (
            //         <div>Please Login</div>
            //     )
            // }
            // else{
            //     return (
            //         <div>You have Logged in.</div>
            //     )
            // }

        /* if/else Condition End -------------*/

        /* Variable condition start -----------------*/

            // let message
            // if(this.state.isGuest){
            //     message = <div>Please Login</div>
            // }else
            // {
            //     message = <div>You have Logged in.</div>
            // }

            // return <div>{message}</div>

        /* Variable condition end --------------*/

        /* Ternary conditional operator start ------------*/
            //return this.state.isGuest ?(<div>Please Login</div>) : (<div>You have Logged in.</div>)
        /* Ternary conditional operator end ------------*/

        /* Short circuit operator start ------------*/
            return this.state.isGuest && <div>Please Login</div> || <div>You have Logged in.</div>
        /* Short circuit operator end ------------*/
    }
}

export default UserGreeting
