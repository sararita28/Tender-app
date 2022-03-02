import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Account from "./pages/account/Account";
import Auth from "./components/auth/Auth";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./pages/home/Home";
import Conversation from "./pages/conversation/Conversation";
import Conversations from "./pages/conversations/Conversations";
import Users from "./components/users/Users";
import { useContext } from "react";
import { Context } from "./Context/Context.js";

function App() {
  //const { user } = useContext(Context);
  const user = false;
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/users/:userId">
            {user ? <Users /> : <Auth />}
          </Route>
          <Route exact path="/auth">
            {user ? <Home /> : <Auth />}
          </Route>
          <Route exact path="/login">
            {user ? <Home /> : <Login />}
          </Route>
          <Route exact path="/register">
            {user ? <Home /> : <Register />}
          </Route>
          <Route exact path="/account">
            {user ? <Account /> : <Auth />}
          </Route>
          <Route exact path="/chats/:person">
            {user ? <Conversation /> : <Auth />}
          </Route>
          <Route exact path="/chats">
            {user ? <Conversations /> : <Auth />}
          </Route>
          <Route exact path="/">
            {user ? <Home /> : <Auth />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
