// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";
import imageMain from "./assets/images/Untitled.jpg";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section className="section-image" style = {{ backgroundImage: `url('${imageMain}')` }}>
          
        </section>
        <Footer />
      </>
    );
  }
}

export default App;
