import logo from './logo.svg';
import './App.css';
import Header from './componets/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Desitnatons from './componets/Desitnatons/Desitnatons';
import Hotels from './componets/Hotels/Hotels';
import Login from './componets/Login/Login';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Header></Header>
     <Routes>
       <Route path='/' element={<Desitnatons></Desitnatons>}></Route>
       <Route path='/hotel' element={<Hotels></Hotels>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
