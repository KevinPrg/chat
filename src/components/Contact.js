import React from 'react';
import './Chat.css'

const Contact = ({name, avatar, online}) => (
    <div className="Contact">
        <img className="avatar" src={avatar} alt="avatarImg" />
        <div className="status">
            <p className="name">{name}</p>
            <span className={online ? "status-online" : "status-offline"}></span>
            <span className="status-text">{online ? "online" : "offline"}</span>
        </div>
    </div>
)

export default Contact;