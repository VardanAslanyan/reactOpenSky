import './App.css';
import Ex6 from './component/ex6';
// import Ex5 from './component/ex5';
// import Ex3 from './component/ex3';
// import Ex2 from './component/ex2';
// import WH from './component/wh';

function App() {
  return (
    <div className="App">
      {/* <WH/> */}
      {/* <Ex2/> */}
      {/* <Ex3/> */}
      {/* <Ex5/> */}
      <Ex6  arrString={[15, 45, 48, 46, 123, 87, 45, 78]}/>
    </div>
  );
}

export default App;
