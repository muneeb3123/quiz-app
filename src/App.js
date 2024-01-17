import './App.css';
import HomePage from './components/HomePage';

function App() {
  function daud(){
    return <h1>daud</h1>
  }
  return (
   <HomePage daud={daud()} />
  );
}

export default App;
