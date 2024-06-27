import './Display.css'
import ChatTab from './ChatTab.jsx'
import ChatWindow from './ChatWindow.jsx'

export default function Display({active=0}) {

    return (
        <div className="Display">
            <ChatTab num1={active}/>
            <ChatWindow num2={active}/>
        </div>
    )
}