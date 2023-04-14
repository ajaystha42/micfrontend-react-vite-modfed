import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

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
