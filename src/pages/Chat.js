import React, { useState, useEffect, useRef } from 'react';
import { db, auth } from './fire';
import SendMessage from './SendMessage';
import {Link} from "react-router-dom";

function Chat() {
    const scroll = useRef();
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, []);

    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-custom bg-custom">
                <span><img id = "logo" src="logo.png" alt="logo"/></span>
                <div class="container-fluid">
                    <div class="navbar-nav">
                        <div id = "navcard" class="card mb-2">
                            <div class="row g-0">
                                <div class="col-md-5">
                                </div>
                                <div class="col-md-5">
                                    <Link to="/Seventh"><button id = "signUp" type="button"> Go Back</button></Link> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </nav> 
            <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    );

}

export default Chat
