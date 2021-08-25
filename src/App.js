// import logo from './logo.svg';
import "./App.css";
import TitleForm from "./Components/TitleForm/TitleForm";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import { Card } from "react-bootstrap";

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
  );
}

export default App;
