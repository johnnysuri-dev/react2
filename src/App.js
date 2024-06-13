
import './App.css';
import { Usuario } from './components/Usuario';

function App() {
  

  return (
    <div className="App">
     <Usuario nombre="johnny" edad={32} nacionalidad="Boliviano"/> 
     <Usuario nombre="suri" edad={33} nacionalidad="Peruano"/>
    </div>
  );
}

export default App;
