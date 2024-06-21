
import { Header } from './components/Header/Header.jsx';
import { DynamicCoreConcept } from './components/DynamicCoreConcept/DynamicCoreConcept.jsx';
import { Examples } from './components/Examples/Examples.jsx'


function App() {

  return (
    <>
      <Header />
      <main>
        <DynamicCoreConcept />
        <Examples />
      </main>
    </>
  );
}

export default App;
