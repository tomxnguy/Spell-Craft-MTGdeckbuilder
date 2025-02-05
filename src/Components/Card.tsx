import { useDeck } from "../Components/DeckContext";

export type CardProps = {
  imageUrl: string;
  name: string;
  id?: string;
  hideAddButton?: boolean; // New prop
};

export default function Card({ imageUrl, name, hideAddButton }: CardProps) {
  const { addToDeck } = useDeck();
  return (
    <div className="cursor-pointer border-radius-lg overflow-hidden">
      <img className="w-full h-fill object-cover" src={imageUrl} alt={name} />
      <h2 className="card-name">{name}</h2>
      {!hideAddButton && (
        <button
          onClick={() => addToDeck({ imageUrl, name })}
          className="add-to-deck-btn bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
        >
          Add to Deck
        </button>
      )}
    </div>
  );
}
