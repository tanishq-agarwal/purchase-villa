import './App.css';
import Content from './components/Content';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./Resp.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/">
          <Content />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
