import CardGrid from "../Components/CardGrid";
import { CardProps } from "../Components/Card";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function CardPage() {
  const { setCode } = useParams<{ setCode: string }>();
  const location = useLocation();
  const setName = location.state?.name || "Unknown Set";

  const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    async function fetchCards() {
      if (!setCode) return;
      try {
        const response = await fetch(
          `https://api.magicthegathering.io/v1/cards?set=${setCode}`
        );
        const data = await response.json();

        if (data && data.cards) {
          const mappedCards: CardProps[] = data.cards.map((card: any) => ({
            name: card.name,
            imageUrl: card.imageUrl || "",
            type: card.type,
            releaseDate: card.releaseDate,
          }));
          setCards(mappedCards);
        }
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    }

    fetchCards();
  }, [setCode]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="flex justify-center">
        {`(${setCode?.toUpperCase()})`} {`${setName}`}
      </h1>
      <CardGrid cards={cards} />
    </div>
  );
}
