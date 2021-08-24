// import logo from './logo.svg';
import "./App.css";
import TitleForm from "./Components/TitleForm/TitleForm";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import { Card, Button } from "react-bootstrap";

const axios = require("axios").default;

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

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

  let config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  let data = {
    title: "test",
  };

  const send = () => {
    axios
      .post(
        "https://us-central1-and-forms.cloudfunctions.net/sendQuestionnaire",
        data,
        config
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //"https://us-central1-and-forms.cloudfunctions.net/sendQuestionnaire",

  return (
    <div className="App">
      <Card
        style={{ width: "60%", position: "absolute", top: "20%", left: "20%" }}
      >
        <Card.Body>
          <ProgressBar />
          <TitleForm handleSubmit={handleSubmit} />
          <Button onClick={send}>post</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
