import './Chat.css'

export default function Chat({from, message, timeStamp}) {

    return (
        <div className={from !== 'you' ? "user":"you"}>
            <div className='message'>{message}</div>
            <div className='time'>{timeStamp}</div>
        </div>
    )
}