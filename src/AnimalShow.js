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
  return (
    <div>
      <img src={svgMap[type]} alt={type} />
    </div>
  );
}

export default AnimalShow;
