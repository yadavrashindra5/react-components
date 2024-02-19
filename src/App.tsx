import "./App.css";
import Container from "./components/Container/container";
import Navbar from "./components/Navbar/navbar";
import Homepage from "./page/homepage";

function App() {
  return (
    <Container>
      <Navbar />
      <hr />
      <main>
        <Homepage />
      </main>
    </Container>
  );
}

export default App;
