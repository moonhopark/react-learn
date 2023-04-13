import './App.css';
import Props from './components/react-basic/Props';
import State from './components/react-basic/State';
import UseEffectDataFetching from './components/react-basic/UseEffectDataFetching';

function App() {
  return (
    <div className="App">
      <State />
      <Props name="moonho" age="12" />
      <UseEffectDataFetching />
    </div>
  );
}

export default App;
