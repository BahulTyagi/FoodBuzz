import './App.css';
import Header from './components/Header.js'
import { Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext.js';
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';

function App() {  
  return (
    <div className="App">
      <Provider store={appStore}>
      <Header/>
      {/* Lets update the value stored in context for outlet components, in header we are directly using the context value from useContext */}
      <UserContext.Provider value={{loggedInUser:"Chef"}}>
        <Outlet/>
      </UserContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
