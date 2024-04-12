
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import TICK from "/public/tick.png";
import HANDBAG from "/public/handbag.jpg";

const ProductContainer = () => {
  return (
    <div className="message-container sender">
      <div className="product-container">
        <img alt="handbag image" className="handbag-img" src={HANDBAG} />
        <div className="product-text">
          <div>
            <span className="product-name">Bags on Timpu</span>
            <img className="product-tick-icon" src={TICK} alt="Tick Icon" />
            <div className="product-link-container">
              <span className="product-count">1123 Products</span>
              <MdOutlineKeyboardArrowRight className="product-link-arrow"/>
            </div>
          </div>
        </div>
      </div>
      <p className="message-text product-msg">Or set filter and help us choose the best bag for you.</p>
      <span className="message-time message-time-sender">4:49 PM</span>
 </div>
  );
};

export default ProductContainer;
