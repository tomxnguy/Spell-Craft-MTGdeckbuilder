import React, { createContext, useContext, useState } from "react";
import { CardProps } from "../Components/Card";
import { v4 as uuidv4 } from "uuid";

export type DeckContextType = {
  deck: CardProps[];
  addToDeck: (card: CardProps) => void;
  removeFromDeck: (id: string) => void;
};

const DeckContext = createContext<DeckContextType | undefined>(undefined);

export const DeckProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [deck, setDeck] = useState<CardProps[]>([]);

  const addToDeck = (card: CardProps) => {
    setDeck((prevDeck) => [...prevDeck, { ...card, id: uuidv4() }]);
    const newCard = { ...card, id: uuidv4() };
    console.log("Card UUID:", newCard.id);
  };

  const removeFromDeck = (cardId: string) => {
    setDeck((prevDeck) => prevDeck.filter((card) => card.id !== cardId));
  };

  return (
    <DeckContext.Provider value={{ deck, addToDeck, removeFromDeck }}>
      {children}
    </DeckContext.Provider>
  );
};

export const useDeck = () => {
  const context = useContext(DeckContext);
  if (!context) {
    throw new Error("useDeck must be used within a DeckProvider");
  }
  return context;
};
