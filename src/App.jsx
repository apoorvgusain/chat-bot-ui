import React from 'react';
import Header from "./components/Header";
import MessageContainer from "./components/MessageContainer";
import TagContainer from "./components/TagContainer";
import ProductContainer from "./components/ProductContainer";
import FilterContainer from "./components/FilterContainer";
import FilterTag from "./components/FilterTag";
import { CgAttachment } from "react-icons/cg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HANDBAG from "/public/handbag.jpg";

function App() {
  const messageText = [
    { type: "sender", time: "4:45 PM", text: "Hi Sam! I am your personal shopping assistant, how can i help you today ?" },
    { type: "receiver", time: "4:46 PM", text: "I am looking for a hand bag, with long strap ." }
  ];
  const tagNames = ["Clutch", "Fabric lining", "Baggit", "Multi-Compartment"];
  const filterNames = ["Strap - Long", "Brand","Size", "Colour", "Material"];

  return (
    <div className="phone">
      <Header />
      
      {messageText.map((message, index) => (
        <MessageContainer key={index} type={message.type} text={message.text} time={message.time}/>
         
      ))}
      <p className="popular-tags-text">Popular tags for handbags</p>

      <TagContainer tags={tagNames}/>
      

      <ProductContainer />

      <FilterContainer />
      <div className="filter-tag-container">
        {filterNames.map((name, index) => (
          <FilterTag key={index} index={index} name={name} />
        ))}
     

      <div className="footer">
        <input type="text" className="message-input" placeholder="Type your message"/>
        <div className="attachment-icon"><CgAttachment /></div>
        <button className="send-button">
          <MdOutlineKeyboardArrowRight className="send-btn-arrow"/>
        </button>
      </div>
    </div>
    </div>
  );
}

export default App;
