import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Main } from './components/main/main';
import { ToDos } from './components/toDo/toDo';
import { Photos } from './components/photos/photos';
import {ToDoDetails} from "./components/toDo/toDoDetailes/toDoDetailes";

function App() {
  return (
    <Router>
      <Route path='/' exact>
        <Main />
      </Route>
      <Route path='/todos' exact>
        <ToDos />
      </Route>
      <Route path='/photos' exact>
        <Photos />
      </Route>
      <Route path='/todos/:id' exact>
        <ToDoDetails />
      </Route>
    </Router>
  );
}

export default App;
