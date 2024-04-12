
const MessageContainer = ({ type, children, time }) => {
  return (
    <div className={`message-container ${type}`}>
      {children}
      <span className="message-time">{time}</span>
    </div>
  );
};

export default MessageContainer;
