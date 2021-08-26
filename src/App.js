// import logo from './logo.svg';
import "./App.css";
import TitleForm from "./Components/TitleForm/TitleForm";
import Login from "./Components/StaticPages/Login";
import ConfirmedResponseSent from "./Components/StaticPages/ConfirmedResponseSent"
import ConfirmedSent from "./Components/StaticPages/ConfirmedSent"
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import MainMenu from "./Components/StaticPages/MainMenu";
import Logout from "./Components/StaticPages/Logout";
import { Card } from "react-bootstrap";
import {BrowserRouter as Router,Route,} from "react-router-dom";

// const axios = require("axios").default;

function App() {


  // axios
  //   .get("https://us-central1-and-forms.cloudfunctions.net/sendQuestionnaire")
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .then(function () {
  //     // always executed
  //   });

  return (
    <Router>
      <Route exact path="/login">
          <Login />
      </Route>
      <Route exact path="/confirmed">
          <ConfirmedResponseSent />
      </Route>
      <Route exact path="/confirmed_sent">
          <ConfirmedSent />
      </Route>
      <Route exact path="/logout">
          <Logout />
      </Route>
      <Route exact path="/main_menu">
          <MainMenu />
      </Route>
      <Route exact path="/">
        <div className="App">
          <Card
            style={{ width: "60%", position: "absolute", top: "20%", left: "20%" }}
          >
            <Card.Body>
              <ProgressBar />
              <TitleForm />
            </Card.Body>
          </Card>
        </div>
      </Route>
    </Router>
  );
}

export default App;
