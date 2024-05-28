import './App.css';
import Body from './components/Body.js'
import Header from './components/Header.js'
import resData from './utils/mockData.js';


function App() {
  return (
    <div className="App">
      <Header/>
      <Body resData={resData}/>
    </div>
  );
}

export default App;
