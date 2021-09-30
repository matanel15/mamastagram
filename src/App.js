import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Post from "./comps/post/post"

function App() {
  return (
    <div className="App">
      <div className="postZone">

        <Post></Post>
      </div>
    </div>
  );
}

export default App;
