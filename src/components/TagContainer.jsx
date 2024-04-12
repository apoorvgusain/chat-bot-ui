
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const TagContainer = ({ children }) => {
  return (
    <div className="tag-arrow-container">
      <MdOutlineKeyboardArrowLeft className="left-arrow" />
      <div className="tag-container">
        {children}
      </div>
      <MdOutlineKeyboardArrowRight className="right-arrow"/>
    </div>
  );
};

export default TagContainer;
