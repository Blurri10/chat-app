import './ChatWindow.css'
import ChatPage from "./ChatPage.jsx";

export default function ChatWindow({num2}) {

    const classes = num2 === 0 ? "ChatWindow hide" : "ChatWindow"

    return (
        <div className={classes}>
            <ChatPage user={num2}/>
        </div>
    )
}