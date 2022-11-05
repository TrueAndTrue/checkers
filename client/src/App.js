import './App.css';
import Board from './lib/Board';


function App() {
  return (
    <div className="app-container">
      <Board boardStyle={{ boardTheme: 'b/w' }}/>
    </div>
  );
}

export default App;
