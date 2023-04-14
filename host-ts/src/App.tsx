import Header from "remoteApp/Header";
import Footer from "remoteApp/Footer";
import "./App.css";

function App() {
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <p>Host Content</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
