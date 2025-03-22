import { Route, Routes } from "react-router-dom";
import { CharacterView } from "../pages/CharacterView";
import { Characters } from "../pages/Characters";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const RoutesApp = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<Characters />} path="/" />
        <Route element={<CharacterView />} path="/character/:idCharacter" />
      </Routes>
      <Footer />
    </div>
  );
};
