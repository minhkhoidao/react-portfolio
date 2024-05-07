import { FC } from "react";
import "./styles.scss";

interface WorksMenuProps {
  items: string[];
  selected?: string;
  clicked: (item: string) => void;
}

const WorksMenu: FC<WorksMenuProps> = ({ items, selected, clicked }) => {
  return (
    <div className="works-menu">
      {items.map((item) => {
        console.log(selected === item);
        return (
          <button
            className={selected === item ? "active" : ""}
            key={item}
            onClick={() => clicked(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};



export default WorksMenu;
