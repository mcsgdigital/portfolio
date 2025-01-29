import { BrowserRouter } from "react-router-dom";

import Container from './components/Container';

import './App.css';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Container />
      </div>
    </BrowserRouter>
    
  );
}

export default App;

