import { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./components/Home"));
const Contact = lazy(() => import("./components/Contact"));
const About = lazy(() => import("./components/About"));

function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
}

export default App;