import './App.css';
import './assets/style/index.scss'

import GuestComponent from './components/guest';
import AuthComponent from './components/auth';



function App() {


  let token = localStorage.getItem('token')


  return (
    <div className="App">
      {token ? <AuthComponent /> : <GuestComponent />}
    </div>
  );
}

export default App;
