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
    <div
      className={classnames("work-card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive,
        [card.type]: isInactive,

      })}
      onClick={isInactive ? handleClickInActive : handleClick}
      style={{ '--rndcolor': color }} >
      <div className="card-face card-font-face" style={{ '--card-face-img': 'url(' + cardback + ')' }} >
      </div>
      <div className="card-face card-back-face" style={{ '--card-face-img': 'url(' + card.image + ')' }} >
      </div>
    </div>
  );
};

export default Card;