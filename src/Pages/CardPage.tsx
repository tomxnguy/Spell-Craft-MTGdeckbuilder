import CardGrid from "../Components/CardGrid";
import { CardProps } from "../Components/Card";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function CardPage() {
  const { setCode } = useParams<{ setCode: string }>();
  const location = useLocation();
  const setName = location.state?.name || "Unknown Set";

  const [cards, setCards] = useState<CardProps[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCards(pageToFetch: number) {
      if (!setCode || pageToFetch > 4) return;

      setLoading(true);
      try {
        const response = await fetch(
          `https://api.magicthegathering.io/v1/cards?set=${setCode}&page=${pageToFetch}`
        );
        const data = await response.json();

        if (data && data.cards) {
          const mappedCards: CardProps[] = data.cards.map((card: any) => ({
            name: card.name,
            imageUrl: card.imageUrl || "",
            type: card.type,
            releaseDate: card.releaseDate,
          }));

          setCards((prevCards) => [...prevCards, ...mappedCards]);

          if (data.cards.length < 100) {
            setHasMore(false);
          } else if (pageToFetch === 4) {
            setHasMore(false);
          }
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error fetching cards:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCards(page);
  }, [setCode, page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 100 &&
        hasMore &&
        !loading &&
        page < 4
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading, page]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="flex justify-center">
        {`(${setCode?.toUpperCase()})`} {`${setName}`}
      </h1>
      <CardGrid cards={cards} />
      {page >= 4 && (
        <div className="text-center mt-4 text-gray-500">All cards loaded</div>
      )}
      {loading && (
        <div className="text-center mt-4 text-gray-500">Loading cards...</div>
      )}
    </div>
  );
}
