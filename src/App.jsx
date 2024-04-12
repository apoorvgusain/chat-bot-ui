import Header from "./components/Header"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import HANDBAG from "/public/handbag.jpg";

import TICK from "/public/tick.png";
function App() {

  return (
    <>
    <div className="phone">
  
    <Header/>
    <div className="message-container sender">
  <p className="message-text">Hi Sam! I am your personal
shopping assistant, how can i
help you today ?</p> <span className="message-time message-time-sender">4:45 PM</span>
</div>

<div className="message-container receiver">
  <p className="message-text">I am looking for a hand bag,
with long strap .</p> <span className="message-time message-time-receiver">4:46 PM</span>
</div>
<p className="popular-tags-text">Popular tags for handbags</p>
<div className="tag-arrow-container">
<MdOutlineKeyboardArrowLeft className="left-arrow" />
<div className="tag-container">
   <div className="tags">
 <div className="tag">Clutch</div>
  <div className="tag">Fabric lining</div>
  <div className="tag">Baggit</div>
  <div className="tag">Multi-Compartment</div>
 </div>
</div>
<MdOutlineKeyboardArrowRight className="right-arrow"/>
</div>
<div className="message-container sender">
  <div className="product-container">
    <img alt="handbag image" className="handbag-img" src={HANDBAG} />
    <div><span className="product-name">Bags on Timpu</span>
        <img className="tick-icon" src={TICK} alt="Tick Icon" />
        </div>
        <div><span className="role">Chat assistant</span>
        </div>
  </div>
  <p className="message-text">Or set filter and help us choose the
best bag for you.</p> <span className="message-time message-time-sender">4:48 PM</span>
</div>
  </div>
  
    </>
  )
}

export default App
