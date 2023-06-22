import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="container">
    <div className="App">
   
    <Weather defaultCity="Lisbon"/>
    <footer>
      This project was coded by <a href="https://beamish-wisp-000090.netlify.app" target="_blank" rel="noreferrer">Alexandra Curran</a> and is open-sourced on
    <a href="https://github.com/teaArchivist/react-weather-app" target="_blank" rel="noreferrer"> Github</a>.
    </footer>
    </div>
    </div>
  );
}
