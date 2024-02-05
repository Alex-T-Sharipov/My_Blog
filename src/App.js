//import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        {/* Switch component makes sure only one component is selected, corresponding to the first matching component */}
        {/* Note: anchor tags are  forcing requests to the server, which is slow. Instead, we need to use special react router link */}
        {/* Even though the new link tags are rendered into hrefs, these hrefs are intercepted by react for faster processing */}
        <Switch>
          <Route exact path='/create'>
            <Create/>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/blogs/:id'>
            <BlogDetails/>
          </Route>
          <Route exact path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
