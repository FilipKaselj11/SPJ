import artikliJson from "./artikli.json";
import './App.css';
import Zaglavlje from "./zaglavlje.js";
import Lista from "./trgovinaLista";

function App() {
  return (
  <>
      <Zaglavlje />
      <Lista artikli={artikliJson}/>
  </>
  );
}
export default App;

