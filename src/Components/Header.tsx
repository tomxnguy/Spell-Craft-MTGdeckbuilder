import deckview from "../assets/deckview.png";
import { Link, Outlet } from "react-router-dom";
import { useDeck } from "../Components/DeckContext";

export default function Header() {
  const { deck } = useDeck();

  return (
    <div>
      <div className="flex w-full h-24 bg-blue-300 items-center justify-between">
        <div className="flex mx-2">
          <Link to="/">
            <button className="rounded-md bg-green-100 px-2">Sets</button>
          </Link>
        </div>
        <div className="w-full flex justify-center items-center">
          <Link to="/">
            <h1 className="font-cinzel text-5xl font-bold text-center">
              Spell Craft
            </h1>
          </Link>
        </div>
        <div className="relative px-4">
          <Link to="/deck">
            <img src={deckview} alt="deckview" className="w-10 h-10" />
            {deck.length > 0 && (
              <span className="absolute -top-1 -left-0.5 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {deck.length}
              </span>
            )}
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
