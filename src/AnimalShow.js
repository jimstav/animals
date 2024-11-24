import { useState } from "react";
import "./AnimalShow.css";
import bird from "./resources/svg/bird.svg";
import cat from "./resources/svg/cat.svg";
import cow from "./resources/svg/cow.svg";
import dog from "./resources/svg/dog.svg";
import gator from "./resources/svg/gator.svg";
import heart from "./resources/svg/heart.svg";
import horse from "./resources/svg/horse.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" src={svgMap[type]} alt={type} />
      <img
        className="heart"
        src={heart}
        alt="heart"
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </div>
  );
}

export default AnimalShow;
