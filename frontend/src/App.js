import './App.css';
import {Routes, Route} from "react-router-dom";
import Register from './components/Register/Register';


const App=()=> {
  return (
    <>
    <Routes>
    <Route path="/register" element={<Register/>}/>
    </Routes>
    </>

  );
}

export default App;
