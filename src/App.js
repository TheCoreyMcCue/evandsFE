// import logo from './logo.svg';
import './App.css';
import TitleForm from './Components/TitleForm/TitleForm';

function App() {

  const handleSubmit = (event) => {
    event.preventDefault();
}

  return (
    <div className="App">
      <TitleForm handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
