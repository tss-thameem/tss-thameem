import logo from './logo.svg';
import './App.css';
import Greeting from './CallBackFuntion';


function App() {
  return (
    <div className="App">
         <Greeting isLoggedIn={true}/>
    </div>
  );
}

export default App;
