import './App.css';
import {Routes, Route, Navigate, NavLink } from 'react-router-dom'
import Answers from './conponents/answers';
import Questions from './conponents/questions';
import { routerNames } from './router/router'

function App() {
  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <NavLink to={routerNames.QUESTIONS_PATH}
              className={({ isActive, isPending }) => isActive ? "active" : ""}>Questions for students</NavLink>
          </li>
          <li>
            <NavLink to={routerNames.ANSWERS_PATH}
              className={({ isActive, isPending }) => isActive ? "active" : ""}>Answers of students</NavLink>
          </li>
        </ul>
      </header>

      <Routes>
        <Route path={routerNames.QUESTIONS_PATH} element={<Questions />} />
        <Route path={routerNames.ANSWERS_PATH} element={<Answers />} />

        <Route path='/*' element={<Navigate to={routerNames.ERROR} />} />
      </Routes>
    </div>
  );
}

export default App;
