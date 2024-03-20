import './App.css';
import Garage from './components/Garage.js';
import Football from './components/Football.js';
import Designation from './components/Designation.js';
import Forms from './components/Forms.js';
import FavouriteColor from './components/FavouriteColor.js';
import {Routes,Route} from 'react-router-dom';
import Timers from './components/Timers.js';
import ClearTimer from './components/ClearTimer.js';
import NestedComponents from './components/NestedComponents.js';
import Renderapp from './components/Renderapp.js';
import Previousrender from './components/Previousrender.js';
import CallbackTodo from './components/CallbackTodo.js';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <p>
          Welcome to React Tutorial.
        </p>
      {/* <Garage />
      <Football />
      <Designation />
      <Forms />
      <FavouriteColor /> */}
      <Routes>
        <Route path='/' element={<Garage />} />
        <Route path='/football' element={<Football />} />
        <Route path='/forms' element={<Forms />} />
        <Route path='/designation' element={<Designation />} />
        <Route path='/favouritecolor' element={<FavouriteColor />} />
        <Route path='/timers' element={<Timers />} />
        <Route path='/cleartimer' element={<ClearTimer />} />
        <Route path='/nested' element={<NestedComponents />} />
        <Route path='/render' element={<Renderapp />} />
        <Route path='/previousrender' element={<Previousrender />} />
        <Route path='/callback' element={<CallbackTodo />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
