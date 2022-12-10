import React from "react";
import classnames from "classnames";
import cardback from "../../images/work/card-back.svg";
import "./card.scss";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled, setShowModalProject, setModalProjectContent, color }) => {

  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  const handleClickInActive = () => {
    if (isInactive && !isDisabled) {
      setModalProjectContent(card.content)
      setShowModalProject(true)
    };
  };
  return (
    <div className={classnames("work-card", {
      "is-flipped": isFlipped,
      "is-inactive": isInactive,
      [card.type]: isInactive,
    })}
      onClick={isInactive ? handleClickInActive : handleClick}
      style={{ '--rndcolor': color }} >
      <div className="card-face card-font-face" >
        <img width={'100%'} height='100%' className="img-fluid" src={cardback} alt="cardback"></img>
      </div>
      <div className="card-face card-back-face"  >
        <img width={'100%'} height='100%' className="img-fluid" src={card.image} alt="cardfront"></img>
      </div>
    </div>
  );
};

export default Card;