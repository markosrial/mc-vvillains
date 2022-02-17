import './App.css';
import NewGamePage from './NewGamePage';
import GamePage from './GamePage';
import {BrowserRouter, Switch, Route } from 'react-router-dom';


// TODO -> 1ro -> info palabras clave, 2do -> logs
const App = () => {

  return (
      <BrowserRouter>
          <Switch>
              <Route path="/home"><NewGamePage/></Route>
              <Route path="/game"><GamePage/></Route>
              <Route><NewGamePage/></Route>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
