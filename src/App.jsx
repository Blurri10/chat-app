import './App.css'
import Display from "./Display.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Display/>}/>
            <Route path="/chat1" element={<Display active={1}/>}/>
            <Route path="/chat2" element={<Display active={2}/>}/>
            <Route path="/chat3" element={<Display active={3}/>}/>
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
