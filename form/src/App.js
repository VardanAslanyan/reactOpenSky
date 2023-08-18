import './App.scss';
import UserData from './components/userData'
import DateInput from './components/dates';
import AddressData from './components/address'
import Button from './components/button'
import './assets/icons/style.css'



function App() {
  return (
    <div className='form'>
      <UserData />
      <DateInput />
      <AddressData />
      <Button />
    </div>
  );
}

export default App;
