// import logo from './logo.svg';
import './App.css';
import Clock from './Components/Clock.js'

function App() {
  return (
    <div className="App">
      <header className='header'>
        <p>Raphael Mardean L. Ortega</p>
        <p>Activity #3</p>
        <p>4ITD</p>
      </header>
      <div className='watch'>
      <Clock></Clock>
      </div>
    </div>
  );
}

export default App;
