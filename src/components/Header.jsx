import BOT from "../../public/bot.png";
import TICK from "../../public/tick.png";

const Header = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="avatar-container">
        <img className="avatar" src={BOT} alt="Bot Avatar" />
          <div className="online-dot" style={{position:"absolute"}} />
        </div>
       <div>
       <div>
        <span className="name">Timpu</span>
        <img className="tick-icon" src={TICK} alt="Tick Icon" />
        </div>
        <div><span className="role">Chat assistant</span>
        </div>
        </div>
      </div>
      <div className="right">
        <div className="online-dot right-online-dot" />
        <span className="right-text">Online</span>
      </div>
    </div>
  );
};

export default Header;
