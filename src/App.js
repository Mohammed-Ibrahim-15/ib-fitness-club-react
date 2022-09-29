import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Activities from './components/Activities/Activities';
import Question from './components/Question/Question';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Activities></Activities>
      <Question></Question>
    </div>
  );
}

export default App;
