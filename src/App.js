
import './App.css';
import Movie from './components.js/Movie';
import Navbar from './components.js/Navbar';
import SearchBar from './components.js/SearchBar';





function App() {
  return (
    <div className="app">
      <Navbar/>
      <SearchBar/>
      <Movie/>
    
    </div>
      
  );
}

export default App;
