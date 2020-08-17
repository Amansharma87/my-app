// import React from 'react';
import './App.css';
import routes from "./router";
import { useRoutes } from "hookrouter";
// import { Route, Link,Router,Switch } from "react-router";
// import Student from './components/student.component/student';
function App() {
    
    const routeResult = useRoutes(routes);
    return (routeResult) ;
  //   <Router>
  //     <Switch>
  //   <div>
  //     <Route path="" component={File} />
  //     <Route path="/student" component={ Student } />
  //     {/* <Route path="/contact" component={Contact} /> */}
  //   </div>
  //   </Switch>
  // </Router>
}

export default App;
