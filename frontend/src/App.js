import './App.css';
import {Routes, Route} from "react-router-dom";
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';
import CompletedTasks from "./components/CompletedTasks/CompletedTasks";
import AllTasks from "./components/AllTasks/AllTasks"

const App=()=> {
  return (
    <>

    
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/completed" element={<CompletedTasks/>}/>
    <Route path="/alltasks" element={<AllTasks/>}/>
    </Routes>
    </>

  );
}

export default App;
