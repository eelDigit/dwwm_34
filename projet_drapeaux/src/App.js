import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Home from "./pages/Home";
import News from "./pages/News";

function App() {
  return (
    <BrowserRouter>
      <Logo />
      <Navigation />

      {/* Mes routes---------------------------- */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
