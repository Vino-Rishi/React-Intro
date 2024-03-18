import './App.css';
import Garage from './components/Garage.js';
import Football from './components/Football.js';
import Designation from './components/Designation.js';
import Forms from './components/Forms.js'
function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <p>
          Welcome to React Tutorial.
        </p>
      <Garage />
      <Football />
      <Designation />
      <Forms />
      </header>
    </div>
  );
}

export default App;
