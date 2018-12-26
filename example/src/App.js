import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
//Containers
import Search from "./Search";
import Breeds from "./Breeds";

const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
          <a className="navbar-brand" href="#">
            Vantage-Fetch
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Breeds
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search">
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Category
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Vote
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container" style={{marginTop: "50px"}}>
          <Route path="/" exact component={Breeds} />
          <Route path="/search/" component={Search} />
          <Route path="/category/" component={Users} />
          <Route path="/vote/" component={Users} />
        </div>
      </div>
    );
  }
}

export default App;
