import s from "./style.module.css";
import { MenuListitem } from "../MenuListItem/MenuListItem";
import { DIFFICULTIES } from "./constant";

export const MenuList = ({ difficulty, onItemClick }) => {
  return (
    <div className={s.container}>
      {DIFFICULTIES.map((diff) => {
        return (
          <MenuListitem
            onClick={onItemClick}
            difficulty={diff}
            isSelected={difficulty === diff}
          />
        );
      })}
    </div>
  );
};
