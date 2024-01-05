import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuListitem } from "./components/MenuListItem/MenuListItem";

export function App() {
  return (
    <div>
      {/* <DisplayDifficulty difficulty="Low" /> */}
      <MenuListitem difficulty="Low" />
    </div>
  );
}
