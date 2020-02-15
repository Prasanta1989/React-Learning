import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic: 'react'
        }
    }
    UsernameChange = event =>{
        this.setState({
            username: event.target.value
        })
    }

    CommentChange = event =>{
        this.setState({
            comments: event.target.value
        })
    }
    topicChange = event =>{
        this.setState({
            topic: event.target.value
        })
    }

    FormSubmit = event =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        const {username, comments, topic}=this.state
        return (
            <div>
                <form onSubmit={this.FormSubmit}>
                    <div>
                        <label>User Name: </label>
                        <input type="text" value={username} onChange={this.UsernameChange}/>
                    </div>
                    <div>
                        <label>Text Area: </label>
                        <textarea type="text" value={comments} onChange={this.CommentChange}></textarea>
                    </div>

                    <div>
                        <label>Topic: </label>
                        <select value={topic} onChange={this.topicChange}>
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                            <option value="Veu">Veu</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
