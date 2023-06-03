import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
     </Routes>
    </BrowserRouter>
    
  );
}

export default App;
