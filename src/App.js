import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from "./pages/home.jsx";
import List from "./pages/List-Artisan.jsx"
import Artisan from './pages/Artisan.jsx';

function App() {
  return (
    <div className="App">
      <nav>
        <Routes>
          <Route path='/' element={<Home/>}>Acceuil</Route>
          <Route path='/List' element={<List/>}>Liste des Artisans</Route>
          <Route path='/Artisan' element={<Artisan/>}>Mes Artisans</Route>
        </Routes>
      </nav>
    </div>
  );
}

export default App;
