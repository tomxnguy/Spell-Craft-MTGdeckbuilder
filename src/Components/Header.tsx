import deckview from "../assets/deckview.png";

export default function Header() {
  return (
    <div className="flex w-full bg-blue-300 justify-between">
      <div className="flex py-2 mx-2">
        <button className="items-center rounded-md bg-green-100 px-2">
          Sets
        </button>
      </div>
      <div className="w-full flex justify-center items-center ">
        <h1>Spell Craft</h1>
      </div>
      <div className="items-center pt-1 px-4">
        <img className="" src={deckview} alt="deckview" />
      </div>
    </div>
  );
}