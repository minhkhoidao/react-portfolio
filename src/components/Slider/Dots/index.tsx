import { FC } from "react";
import "./styles.scss";

interface DotsProps {
  len: number;
  activeItem: number;
  changeItem: (index: number) => void;
}

const Dots: FC<DotsProps> = ({ len, activeItem, changeItem }) => {
  const dots = [];
  for (let i = 0; i < len; i++) {
    let dotClass = "owl-dot";

    if (activeItem === i) {
      dotClass += " active";
    }

    dots.push(
      <button
        key={i}
        onClick={() => {
          changeItem(i);
        }}
        className={dotClass}
      >
        <span />
      </button>,
    );
  }

  return <div className="owl-dots">{dots}</div>;
};

export default Dots;
