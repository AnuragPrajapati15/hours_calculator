import './App.css';
import TimeCalculator from './components/timeCalculatorForm';
import SocialMediaLinks from './components/socialMedia';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TimeCalculator/>
        <SocialMediaLinks/>
      </header>
    </div>
  );
}

export default App;
