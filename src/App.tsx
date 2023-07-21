import './App.css';
import Container from './components/Container';
import Counter from './components/state/Counter';

function App() {

  return (
    <div className="App">
      <Container styles={{border:'1px solid black',padding:'1rem' }}/>
      <Counter/>
    </div>
  );
}

export default App;
