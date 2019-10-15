import React from 'react';
import './Chat.css'

class Contact extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            online: props.online
        }
    }
    render() {
    return(
    <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt="avatarImg" />
        <div className="status">
            <p className="name">{this.props.name}</p>
            <span onClick ={event => {const newOnline = !this.state.online;
                this.setState({ online: newOnline})
            }}className={this.state.online ? "status-online" : "status-offline"}></span>
            <span className="status-text">{this.state.online ? "online" : "offline"}</span>
        </div>
    </div>
)
}
}

export default Contact;