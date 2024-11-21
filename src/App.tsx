import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import CardPage from "./Pages/CardPage";
import DeckPage from "./Pages/DeckPage";
import FrontPage from "./Pages/FrontPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<FrontPage />} />
        <Route path="/set/:setCode" element={<CardPage />} />
        <Route path="/deck" element={<DeckPage />} />
      </Route>
    </Routes>
  );
}
