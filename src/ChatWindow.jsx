import './ChatWindow.css'
import ChatPage from "./ChatPage.jsx";

export default function ChatWindow({num}) {
    return (
        <div className="ChatWindow hide">
            <ChatPage user={num}/>
        </div>
    )
}