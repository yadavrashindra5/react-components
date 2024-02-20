import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Homepage from "./page/homepage";

function App() {
  return (
    <>
      <Navbar />
      <hr />
      <main>
        <Homepage />
      </main>
    </>
  );
}

export default App;
