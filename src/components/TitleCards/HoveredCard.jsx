import React, { useEffect, useState } from "react";
import "./HoveredCard.css";
import { CgAdd } from "react-icons/cg";
import { SlLike } from "react-icons/sl";
import { CiPlay1 } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const HoveredCard = ({ card, position, onMouseEnter, onMouseLeave }) => {
  const [hidden, setHidden] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setHidden(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    navigate("/movie-details", { state: { card } });
  };
  if (!card || hidden) return null; 

  return (
    <div
      className="hovered-card visible"
      style={{ left: position.x, top: position.y }}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >

      <img src={card.image} alt={card.name} className="hovered-card-img" />
      <div className="hovered-card-details">
        <h3>{card.name}</h3>
        
        <div className="hovered-buttons">
          <button className="hover-btn"><CiPlay1 /></button>
          <button className="hover-btn"><CgAdd /></button>
          <button className="hover-btn"><SlLike /></button>
          <button className="drop-down hover-btn">
            <IoIosArrowDropdown/>
          </button>
        </div>
        <p className="certificate-box">{card.sensorBoardCertificate}</p>
        <p>{card.genre}</p>
      </div>
    </div>
  );
};

export default HoveredCard;