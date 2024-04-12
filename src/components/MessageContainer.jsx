
const MessageContainer = ({ type, text, time }) => {
  return (
    <div className={`message-container ${type}`}>
       <p className="message-text">{text}</p>
      <span className={type=="sender"?"message-time message-time-sender":"message-time message-time-receiver"}>{time}</span>
    </div>
  );
};

export default MessageContainer;
