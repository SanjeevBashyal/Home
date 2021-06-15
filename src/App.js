import './App.css';
// import HeaderClass from './Components/HeaderClass'
import Header from './Components/Header'
import Products from './Components/Products'
// import BridgeInput from './Components/BridgeInput'
function App() {
  return (
    <div className="App">
      {/* <HeaderClass height="50" width="50"/> */}
      <Header />
      <Products size="100" id1="hue3" id2="hue4"/>
    </div>
  );
}

export default App;
