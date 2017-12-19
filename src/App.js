import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch } from 'react-router-dom';
import List from './components/List';
import Detail from './components/Detail';

/* Home component */
const Home = () => (
  <div>
    <h2>使用 React 建立的網站</h2>
    <ul>
      <li>使用公開api : 台灣節慶活動</li>
      <li>React Router v4</li>
      <li>有興趣的節慶記錄在localStroge</li>
    </ul>
  </div>
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">          
          <Link to="/" className="navbar-brand"> Taiwan Festivals</Link>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <span className="nav-link">
                  <Link to="/list">List</Link>
                </span>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List}/>
          <Route path="/detail" component={Detail} />
        </div>
      </div>
    );
  }
}
