import Chat from './Chat';
import {auth} from './fire';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './Login';
import './styles/message.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Message() {
    const [user] = useAuthState(auth)
    return (
      <>
        {user ? <Chat /> : <Login />}
      </>
    );
  }
  
  export default Message;
