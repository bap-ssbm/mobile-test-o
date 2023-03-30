import Navbar from "./navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import { AnimatePresence } from "framer-motion";
import About from "./About/About";

export default function App() {
  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Routes>
          <Route path="/mobile-test-o/" element={<Homepage />} />
          <Route path="/mobile-test-o/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
