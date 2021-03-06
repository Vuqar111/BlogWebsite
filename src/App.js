import Navbar from "./Navbar";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDeatils from "./BlogDeatils";
import Create from "./Create";
import NotFound from "./NotFound";
import Liked from "./Liked";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route path="/liked">
              <Liked />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDeatils />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
