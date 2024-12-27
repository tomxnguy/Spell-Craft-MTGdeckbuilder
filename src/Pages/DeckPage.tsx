import Card from "../Components/Card";
import { useDeck } from "../Components/DeckContext";

export default function DeckPage() {
  const { deck, removeFromDeck } = useDeck();

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-cinzel text-2xl text-center">My Deck</h1>
      {deck.length === 0 ? (
        <div className="text-center mt-4 text-gray-500">
          Your deck is empty.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {" "}
          {deck.map((card) => (
            <div key={card.name} className="relative">
              <Card {...card} />
              <button
                onClick={() => removeFromDeck(card.name)}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
