import './ChatTab.css'
import Card from "./Card.jsx";

export default function ChatTab({num1}) {

    const classes = num1 === 0 ? "ChatTab" : "ChatTab hide"

    return (
        <div className={classes}>
            <h1>Chats</h1>
            <Card user={1} navigateTo="chat1"/>
            <Card user={2} navigateTo="chat2"/>
            <Card user={3} navigateTo="chat3"/>
        </div>
    )
}