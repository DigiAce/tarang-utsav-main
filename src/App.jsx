import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

// Dropdown pages

import AnniversaryPage from "./pages/services/AnniversaryPage.jsx";
import BachelorPage from "./pages/services/BachelorPage.jsx";
import CockTailPage from "./pages/services/CockTailPage";
import SangeetPage from "./pages/services/SangeetPage";
import MehandiPage from "./pages/services/MehandiPage";
import CorporateEventPage from "./pages/services/CorporateEventPage";
import EngagementPage from "./pages/services/EngagementPage";
import HaldiPage from "./pages/services/HaldiPage";
import HouseWarmingPage from "./pages/services/HouseWarmingPage";
import BirthDayPage from "./pages/services/BirthdayPage";
import BabyShowerPage from "./pages/services/BabyShowerPage";
import BridalShowerPage from "./pages/services/BridalShowerPage.jsx";

function App() {
  return (
    <Router>
      <Nav /> {/* Navigation Bar */}
      <WhatsAppButton />
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dropdown pages */}
        <Route path="/services/anniversary" element={<AnniversaryPage />} />
        <Route path="/services/bachelor" element={<BachelorPage />} />
        <Route path="/services/cocktail" element={<CockTailPage />} />
        <Route path="/services/sangeet" element={<SangeetPage />} />
        <Route path="/services/mehandi" element={<MehandiPage />} />
        <Route path="/services/corporate" element={<CorporateEventPage />} />
        <Route path="/services/engagement" element={<EngagementPage />} />
        <Route path="/services/haldi" element={<HaldiPage />} />
        <Route path="/services/housewarming" element={<HouseWarmingPage />} />
        <Route path="/services/birthday" element={<BirthDayPage />} />
        <Route path="/services/babyshower" element={<BabyShowerPage />} />
        <Route path="/services/BridalShower" element={<BridalShowerPage />} />

        {/*servicegaller*/}
      </Routes>
      <Footer /> {/* Footer */}
    </Router>
  );
}

export default App;
