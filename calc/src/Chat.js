import React, { Component } from 'react'


export class Chat extends Component {

    constructor(props) {
        super(props)


    }


    handleFormSubmit = (event) => {

        event.preventDefault();
        let text = this.messageText.value
        this.props.actions.send(text);

    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form">
                        <div className="input">
                            <input type="text" ref={(input) => { this.messageText = input }} />
                            <span className="button">
                                <button type="submit">Send</button>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Chat
