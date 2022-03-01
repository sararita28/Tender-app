import Header from "./components/header/Header";
import Cards from "./components/cards/Cards";
import SwipeButtons from "./components/swipeButtons/SwipeButtons";
import Chats from "./components/chats/Chats";
import SingleChat from "./components/singleChat/SingleChat";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/chats/:person">
            <Header backButton="/chats" />
            <SingleChat />
          </Route>
          <Route exact path="/chats">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route exact path="/">
            <Header />
            <Cards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
