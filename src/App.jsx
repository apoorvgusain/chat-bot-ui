import Header from "./components/Header"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import HANDBAG from "/public/handbag.jpg";
import { CgAttachment } from "react-icons/cg";
import TICK from "/public/tick.png";
import { FaSlidersH } from "react-icons/fa";
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
    <div className="product-text">
    <div ><span className="product-name">Bags on Timpu</span>
        <img className="product-tick-icon" src={TICK} alt="Tick Icon" />
        <div className="product-link-container"><span className="product-count">1123 Products</span>
        
<MdOutlineKeyboardArrowRight className="product-link-arrow"/>
        </div>
        </div>
        </div>
  </div>
  <p className="message-text product-msg ">Or set filter and help us choose the
best bag for you.</p> <span className="message-time message-time-sender">4:48 PM</span>
</div>

<div class="filter-container">
  <div class="filter-text">Select Filter</div>
  <div class="filter-icon"><FaSlidersH /> Filter</div>
</div>

<div class="filter-tag-container">
  <div class="filter-tag filter-tag-first">
    <div class="filter-tag-name">Strap - Long</div>
    <div class="delete-icon">X</div>
  </div>
  <div class="filter-tag">
    <div class="filter-tag-name">Brand</div>
    <div class="delete-icon">X</div>
  </div>
  <div class="filter-tag">
    <div class="filter-tag-name">Colour</div>
    <div class="delete-icon">X</div>
  </div>
  <div class="filter-tag">
    <div class="filter-tag-name">Material</div>
    <div class="delete-icon">X</div>
  </div>
  <div class="filter-tag">
    <div class="filter-tag-name">Size</div>
    <div class="delete-icon">X</div>
  </div>
</div>
<div class="footer">
  <input type="text" class="message-input" placeholder="Type your message"/>
  <div class="attachment-icon"><CgAttachment /></div>
  <button class="send-button">
<MdOutlineKeyboardArrowRight className="send-btn-arrow"/></button>
</div>
  </div>
  
    </>
  )
}

export default App
