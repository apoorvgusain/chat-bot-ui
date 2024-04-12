
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const TagContainer = ({ tags }) => {
  return (
    <div className="tag-arrow-container">
      <div className="tag-container">
      <div className="tags">
      {tags.map((tagName, index) => (
            <div key={index} className="tag">{tagName}</div>
          ))}
        </div>
      </div>
      <MdOutlineKeyboardArrowRight className="right-arrow"/>
    </div>
  );
};

export default TagContainer;
