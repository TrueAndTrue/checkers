import './App.css';
import Board from './lib/Board';


function App() {
  return (
    <div className="app-container">
      <Board boardStyle={{  text: 'no-text', p1: 'black' ,p2: 'brown', boardTiles: { p1: 'orange', p2: 'blue', diag1: 'blue', diag2: 'green'} }}/>
    </div>
  );
}

export default App;
