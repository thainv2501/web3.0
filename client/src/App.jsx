import "./App.css";
import { Navbar, Welcome, Footer, Transactions, Services } from "./components";
const App = () => {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
