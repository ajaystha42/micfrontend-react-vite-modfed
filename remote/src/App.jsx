import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <p> Page Content</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
