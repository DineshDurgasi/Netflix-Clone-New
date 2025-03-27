import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { useNavigate } from "react-router-dom";
import HoveredCard from "./HoveredCard";

const TitleCards = ({ title }) => {
  const cardsRef = useRef(null);
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const CARD_WIDTH = 250;
  const NUM_VISIBLE_CARDS = 5;

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
    setHoveredCard(null);
  };

  const handleMouseEnter = (event, card) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);

    const rect = event.target.getBoundingClientRect();
    const parentRect = cardsRef.current.getBoundingClientRect();

    if (rect.left >= parentRect.left && rect.right <= parentRect.right) {
      setHoverPosition({
        x: Math.max(rect.left - 50, parentRect.left),
        y: Math.max(rect.top - 100, 10),
      });
      setHoveredCard(card);
    }
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => setHoveredCard(null), 500);
  };

  const scrollLeft = () => {
    if (cardsRef.current) cardsRef.current.scrollLeft -= CARD_WIDTH * NUM_VISIBLE_CARDS;
  };

  const scrollRight = () => {
    if (cardsRef.current) cardsRef.current.scrollLeft += CARD_WIDTH * NUM_VISIBLE_CARDS;
  };

  useEffect(() => {
    const ref = cardsRef.current;
    if (!ref) return;

    ref.addEventListener("wheel", handleWheel);
    return () => {
      ref.removeEventListener("wheel", handleWheel);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  return (
    <div
      className="title-cards"
      onMouseEnter={() => setShowScrollButtons(true)}
      onMouseLeave={() => {
        setShowScrollButtons(false);
        setHoveredCard(null);
      }}
    >
      <h2>{title || "Popular On Netflix"}</h2>
      <div className="card-list-container">
        
        
        {showScrollButtons && (
          <div className="scroll-button-container left">
            <button className="scroll-button" onClick={scrollLeft}>{"<"}</button>
          </div>
        )}

        <div className="card-list" ref={cardsRef}>
          {cards_data.map((card, index) => (
            <div
              className="card"
              key={index}
              onMouseEnter={(event) => handleMouseEnter(event, card)}
              onMouseLeave={handleMouseLeave}
              onClick={() => navigate("/movie-details", { state: { card } })}
            >
              <img src={card.image} alt={card.name} />
              <p>{card.name}</p>
            </div>
          ))}
        </div>

        
        {showScrollButtons && (
          <div className="scroll-button-container right">
            <button className="scroll-button" onClick={scrollRight}>{">"}</button>
          </div>
        )}
      </div>

      {hoveredCard && (
        <HoveredCard
          card={hoveredCard}
          position={hoverPosition}
          onMouseEnter={() => {
            if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </div>
  );
};

export default TitleCards;