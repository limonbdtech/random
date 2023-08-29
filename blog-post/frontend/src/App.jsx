import Newsfeed from "./Component/Newsfeed";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Full from "./Component/Full";


function App() {
  return (
    
    <BrowserRouter>
    <div className="app">
      <Routes>
     <Route path="/" element={ <Newsfeed/>}/>
    
     <Route path="/all/:userId" element={<Full/>} />
     
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;