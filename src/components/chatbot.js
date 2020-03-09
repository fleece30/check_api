import React, { Component } from 'react';
import Pusher from 'pusher-js';
import './chatbot.css';

class Chatbot extends Component {
    constructor(props) {
    super(props);
    this.state = {
        userMessage: '',
        conversation: [],
    };
    }

    componentDidMount() {
    const pusher = new Pusher('dee0759d10e083fdd597', {
        cluster: 'ap2',
        encrypted: true,
    });

    const channel = pusher.subscribe('bot');
    channel.bind('bot-response', data => {
        const msg = {
        text: data.message,
        user: 'ai',
        };
        this.setState({
        conversation: [...this.state.conversation, msg],
        });
    });
    }

    handleChange = event => {
    this.setState({ userMessage: event.target.value });
    };

    handleSubmit = event => {
    event.preventDefault();
    if (!this.state.userMessage.trim()) return;

    const msg = {
        text: this.state.userMessage,
        user: 'human',
    };

    this.setState({
        conversation: [...this.state.conversation, msg],
    });

    fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        message: this.state.userMessage,
        }),
    });

    this.setState({ userMessage: '' });
    };

    render() {
    const ChatBubble = (text, i, className) => {
        return (
        <div key={`${className}-${i}`} className={`${className} chat-bubble`}>
            <span className="chat-content">{text}</span>
        </div>
        );
    };

    const chat = this.state.conversation.map((e, index) =>
        ChatBubble(e.text, index, e.user)
    );

    return (
        <div className="chat-window">
            <div className="conversation-view">{chat}</div>
            <div className="message-box">
            <form onSubmit={this.handleSubmit} style={{overflowX: "hidden"}}>
                <input
                value={this.state.userMessage}
                onInput={this.handleChange}
                className="text-input"
                defaultValue={this.state.userMessage}
                type="text"
                autoFocus
                placeholder="Type your message and hit Enter to send"
                />
            </form>
            </div>
        </div>
    );
    }
}

export default Chatbot;