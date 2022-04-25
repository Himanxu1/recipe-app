import './App.css';
import Pages from './Pages/Pages';
import Category from './Components/Category';
import { BrowserRouter } from 'react-router-dom';
import Search from './Pages/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Search/>
      <Category/>
      <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
