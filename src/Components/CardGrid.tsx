import Card from "./Card";

export type CardData = {
  name: string;
  imageUrl: string;
};

export type CardGridProps = {
  cards: CardData[];
};

export default function CardGrid({ cards }: CardGridProps) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {cards.map((card, index) => (
        <Card key={index} name={card.name} imageUrl={card.imageUrl} />
      ))}
    </div>
  );
}
