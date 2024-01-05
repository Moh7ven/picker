import { useState } from "react";
import s from "./style.module.css";

export function MenuListitem(props) {
  const [isHovered, setIsHovered] = useState(false);
  console.log("***", isHovered);
  return (
    <div
      className={s.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Set to : {props.difficulty}
    </div>
  );
}
