import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import OurWorker from "./pages/OurWorker";
import ContactUs from "./pages/ContactUs";
import { Routes, Route } from "react-router-dom";
import MovieDetailes from "./pages/MovieDetailes";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<AboutUs />} exact />
        <Route path="/work" element={<OurWorker />} exact />
        <Route path="/work/:id" element={<MovieDetailes />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
