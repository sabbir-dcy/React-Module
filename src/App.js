import './App.css';
import Device from './components/Device/Device';
import Tablet from './components/Tablet/Tablet';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name='iphone' price='1000'></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
