import './Messages.css'
import Chat from './Chat.jsx'

export default function Messages({chat}) {

    const from = [];
    const message = [];
    const timeStamp = [];

    for (let c of chat) {
        const keys = Object.keys(c);

        for (let k of keys) {
            from.unshift(k);
            message.unshift(c[k].message);
            timeStamp.unshift(c[k].timeStamp);
        }
    }

    return (
        <div className="Messages">
            {message.map(m => <Chat from={from[message.indexOf(m)]} message={m} timeStamp={timeStamp[message.indexOf(m)]}/>)}
        </div>
    )
}