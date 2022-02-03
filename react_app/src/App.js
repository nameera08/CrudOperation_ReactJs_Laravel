import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

 import Employee from './Pages/Employee';
 import Addemployee from './Pages/Addemployee';
 import Editemployee from './Pages/Editemployee';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Employee} />
        <Route path="/add-employee" component={Addemployee} />
        <Route path="/edit-employee/:id" component={Editemployee}/>
      </Switch>

    </Router>
  );
}

export default App;
