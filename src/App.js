import "./App.css";
import Countries from "./Components/Countries/Countries";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer> 
    </div>
  );
}
export default App;
