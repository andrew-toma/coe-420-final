import React, {useState, useEffect, useRef} from 'react';
import SendMessage from './SendMessage';
import {db, auth, fire} from './fire';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './Login';
import './styles/message.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';


const Message =({msg})=>{
  const [user] = useAuthState(auth);
  const scroll = useRef();
  const [messages, setMessages] =useState([]);
  
  const handleLogout = () =>{
    fire.auth().signOut();
  };
    
  useEffect(() => { 
    db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
      })
  }, []);

    return (
        <div>
            <div className='alert alert-info alert-dismissible fade show' role='alert'>
                    {msg}
                    <button
                        type='button'
                        className='close'
                        data-dismiss='alert'
                        aria-label='Close'
                    >
                        <span aria-hidden='true'>&times;</span>
                    </button>
            </div>
             {user ? (
                 <div className="msgs">
                 {messages.map(({ id, text, photoURL, uid }) => (
                     <div>
                         <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                             <img src={photoURL} alt="" />
                             <p>{text}</p>
                         </div>
                     </div>
                 ))}
                 <SendMessage scroll={scroll} />
             <div ref={scroll}></div>
             </div>   
                    ):(
                        <Login/>
            )}
        </div>
    )


}

Message.propTypes = {
    msg: PropTypes.string.isRequired
  };
export default Message;