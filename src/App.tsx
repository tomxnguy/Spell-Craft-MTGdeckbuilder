import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import CardPage from "./Pages/CardPage";
import DeckPage from "./Pages/DeckPage";
import FrontPage from "./Pages/FrontPage";
import ScrollToTopButton from "./Components/ScrolltoTopButton";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<FrontPage />} />
          <Route path="/set/:setCode" element={<CardPage />} />
          <Route path="/deck" element={<DeckPage />} />
        </Route>
      </Routes>

      <ScrollToTopButton />
    </div>
  );
}
