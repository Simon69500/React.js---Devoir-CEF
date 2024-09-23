import './App.css';
import { Route, Routes } from 'react-router-dom';


import Home from "./pages/home.jsx";
import List from "./pages/List-Artisan.jsx"
import Artisan from './pages/Artisan.jsx';
import Mentions from './pages/Sous-Pages/Mentions.jsx';
import Cookies from './pages/Sous-Pages/Cookies';
import Data from './pages/Sous-Pages/Data';
import Acces from './pages/Sous-Pages/Acces';

function App() {
  return (
    <div className="App">
      <nav>
        <Routes>
          <Route path='/' element={<Home/>}>Acceuil</Route>
          <Route path='/List' element={<List/>}>Liste des Artisans</Route>
          <Route path='/Mentions' element={<Mentions/>}>Mentions légales</Route>
          <Route path='/Data' element={<Data/>}>Données personelles</Route>
          <Route path='/Cookies' element={<Cookies/>}>Cookies</Route>
          <Route path='/Acces' element={<Acces/>}>Accesibilités</Route>
          <Route path='/Artisan/:id' element={<Artisan/>} />
        </Routes>
      </nav>
    </div>
  );
}

export default App;
