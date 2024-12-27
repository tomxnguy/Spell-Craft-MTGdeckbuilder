import React, { createContext, useContext, useState } from "react";
import { CardProps } from "../Components/Card";

export type DeckContextType = {
  deck: CardProps[];
  addToDeck: (card: CardProps) => void;
  removeFromDeck: (cardName: string) => void;
};

const DeckContext = createContext<DeckContextType | undefined>(undefined);

export const DeckProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [deck, setDeck] = useState<CardProps[]>([]);

  const addToDeck = (card: CardProps) => {
    setDeck((prevDeck) => [...prevDeck, card]);
  };

  function removeFromDeck(cardName: string) {
    setDeck((prevDeck) => prevDeck.filter((card) => card.name !== cardName));
  }

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
