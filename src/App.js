import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { NavBarResponsive } from "./components/NavBarResponsive/NavBarResponsive";
import { SobreMi } from "./pages/Sobre mi/SobreMi";
import { Encontrar } from "./pages/Encontrar/Encontrar";
import { Libros } from "./pages/Libros/Libros";
import { BoxMultisensorial } from "./pages/BoxMultisensorial/BoxMultisensorial";
import { Contactame } from "./pages/Contactame/Contactame";
import { Footer } from "./components/Footer/Footer";
import { ThemeProvider } from "./context/themes";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <NavBarResponsive />
          <Routes>
            <Route path="/" element={<SobreMi />} />
            <Route path="/que-vas-a-encontrar" element={<Encontrar />} />
            <Route path="/libros" element={<Libros />} />
            <Route path="/box-multisensorial" element={<BoxMultisensorial />} />
            <Route path="/contactame" element={<Contactame />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
