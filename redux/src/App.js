import './App.css';
import Register from './pages/register';
import Login from './pages/login';
import User from './pages/user';

import {Routes, Route} from 'react-router-dom'
import { routerLinks } from './routerLinks';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routerLinks.REGISTER} element={<Register/>}></Route>
        <Route path={routerLinks.LOGIN} element={<Login/>}></Route>
        <Route path={routerLinks.USER} element={<User/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
