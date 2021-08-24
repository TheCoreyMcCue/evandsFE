// import logo from './logo.svg';
import "./App.css";
import TitleForm from "./Components/TitleForm/TitleForm";
// const axios = require("axios").default;

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

  // async function getData() {
  //   const response = await fetch(
  //     "https://us-central1-and-forms.cloudfunctions.net/sendQuestionnaire"
  //   );
  //   const data = await response.json();
  //   return data;
  //
  // getData();

  return (
    <div className="App">
      <TitleForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
