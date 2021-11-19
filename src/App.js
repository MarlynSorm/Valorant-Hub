import React from 'react';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import './App.css';
import Main from './views/Main';
import AllAgents from './components/AllAgents';
import AllMaps from './components/AllMaps';
import AllWeapons from './components/AllWeapons';
import Leaderboard from './components/Leaderboard';
import Signin from './components/Signin';
import Agent from './components/Agent';
import Weapon from './components/Weapon';
import Map from './components/Map';

function App() {
  return (
    <div >
      <BrowserRouter>
        <div className="header">
          <div >
            <button className="HUD"><Link to="/"> Home </Link></button>
            <button className="HUD"><Link to="/signin"> Find Yourself </Link></button>
            <button className="HUD"><Link to="/leaderboards"> Leaderboard </Link></button>
          </div>
          <div>
            <h1 style = {{marginTop:20, marginRight:65}}>Valorant HUB</h1>
          </div>
          <div>
            <button className="HUD"><Link to="/agents"> Agents </Link></button>
            <button className="HUD"><Link to="/weapons"> Weapons </Link></button>
            <button className="HUD"><Link to="/maps"> Maps </Link></button>
          </div>
        </div>
        <Switch>
          <Route path="/weapons/:id">
            <Weapon />
          </Route>
          <Route exact path="/agents/:id">
            <Agent />
          </Route>
          <Route exact path="/maps/:id">
            <Map />
          </Route>
          <Route path="/leaderboards">
            <Leaderboard />
          </Route>
          <Route path="/weapons">
            <AllWeapons />
          </Route>
          <Route path="/agents">
            <AllAgents />
          </Route>
          <Route path="/maps">
            <AllMaps />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
