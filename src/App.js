import React, {useState} from 'react'
import SideMenu from './components/SideMenu';
import Navbar  from './components/Navbar';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
 
const Dashboard = () =>{
  return <h1>Dashboard</h1>
};
const Hourly = () =>{
  return <h1>Hourly</h1>
};
const Regualr = () =>{
  return <h1>Regular</h1>
};
const Dashboard2 = () =>{
  return <h1>Dashboard2</h1>
};

function App() {
  const [inactive, setInactive] = useState(false);
  return (
    <div className="App">
      <div className="main-app">
        <Router>
            <SideMenu onCollapse={(inactive) =>{
              setInactive(inactive);
            }} />
            <Navbar inactive={inactive}/>
            <div className={`container ${inactive?"inactive":""} `}>
              <Switch>
                <Route exact path={'/'}> <Dashboard/></Route>
                <Route  path={'/employees/hourly'}> <Hourly/></Route>
                <Route  path={'/employees/regular'}> <Regualr/></Route>
                <Route exact path={'/dashboard2'}> <Dashboard2/></Route>
              </Switch>
            </div>
          </Router>
      </div>
    </div>
  );
}

export default App;
