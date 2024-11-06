import {
  BrowserRouter as Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from "./Components/Header";
import CardPage from "./Pages/CardPage";
import DeckPage from "./Pages/DeckPage";
import FrontPage from "./Pages/FrontPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<FrontPage />} />
          <Route path="/cards" element={<CardPage />} />
          <Route path="/deck" element={<DeckPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
