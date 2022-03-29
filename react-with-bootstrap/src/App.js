import { Button, Spinner } from "react-bootstrap";
import "./App.css";
import CardGroup2 from "./Components/CardGroup2/CardGroup2";

function App() {
  return (
    <div className="App">
      <Button variant="danger">my button</Button>
      <br />
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <CardGroup2></CardGroup2>
    </div>
  );
}

export default App;
