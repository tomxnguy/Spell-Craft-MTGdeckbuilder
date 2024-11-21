import deckview from "../assets/deckview.png";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="flex w-full h-24 bg-blue-300 items-center justify-between">
        <div className="flex mx-2">
          <Link to="/">
            <button className="rounded-md bg-green-100 px-2">Sets</button>
          </Link>
        </div>
        <div className="w-full flex justify-center items-center ">
          <Link to="/">
            <h1>Spell Craft</h1>
          </Link>
        </div>
        <div className="px-4">
          <Link to="/deck">
            <img src={deckview} alt="deckview" />
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
