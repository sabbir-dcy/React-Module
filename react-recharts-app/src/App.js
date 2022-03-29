import "./App.css";
import LineCharts from "./components/LineCharts/LineCharts";
import SpecialCart from "./components/SpecialCart/SpecialCart";
import { useSpring, animated } from "react-spring";
import { useState } from "react";

function App() {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
  });
  return (
    <div className="App">
      <animated.div style={props}>I will fade in</animated.div>
      <LineCharts></LineCharts>
      <SpecialCart />
    </div>
  );
}

export default App;
