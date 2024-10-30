import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Tasks from './components/Tasks';
import Leaves from './components/Leaves';
import EditProfile from './components/EditProfile';
function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route path='/' element={<Login></Login>}></Route>
  <Route path='/Signup' element={<Signup></Signup>}></Route>
  <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
  <Route path='/Editprofile' element={<EditProfile/>}></Route>
  <Route path='/Tasks' element={<Tasks></Tasks>}></Route>
  <Route path='/Leaves' element={<Leaves></Leaves>}></Route>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
