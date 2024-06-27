import './ChatWindow.css'
import ChatPage from "./ChatPage.jsx";

export default function ChatWindow({num2}) {

    if (num2 === 0) {
        return (
            <div className="ChatWindow hide">
                <ChatPage user={num2}/>
            </div>
        )
    }
    else {
        return (
            <div className="ChatWindow">
                <ChatPage user={num2}/>
            </div>
        )
    }

}