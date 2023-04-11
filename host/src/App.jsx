import "./App.css";
import Header from "remoteApp/Header";
import Footer from "remoteApp/Footer";

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
