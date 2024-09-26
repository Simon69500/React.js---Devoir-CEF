import './App.css';
import { Route, Routes} from 'react-router-dom';


import Home from "./pages/home.jsx";
import List from "./pages/List-Artisan.jsx";

import Mentions from './pages/Sous-Pages/Mentions.jsx';
import Cookies from './pages/Sous-Pages/Cookies';
import Acces from './pages/Sous-Pages/Acces';
import Artisan from './pages/Artisan.jsx';
import Batiment from './Menu/Batiment.jsx';
import Service from './Menu/Services.jsx';
import Fabrication from './Menu/Fabrication.jsx';
import Alimentation from './Menu/Alimentation.jsx';

function App() {
  return (
    <div className="App">
      <nav>
          <Routes>
           <Route path='/' element={<Home/>}>Acceuil</Route>
            <Route path='/List/:id' element={<List/>}>Liste des Artisans</Route>
            <Route path='/Mentions' element={<Mentions/>}>Mentions légales</Route>
            <Route path='/Artisan/:id' element={<Artisan/>}>Données personelles</Route>
            <Route path='/Cookies' element={<Cookies/>}>Cookies</Route>
            <Route path='/Acces' element={<Acces/>}>Accesibilités</Route>
            <Route path='/Bâtiment/category/:category' element={<Batiment/>}>Bâtiment</Route>
            <Route path='/Services/category/:category' element={<Service/>}>Services</Route>
            <Route path='/Fabrication/category/:category' element={<Fabrication/>}>Fabrication</Route>
            <Route path='/Alimentation/category/:category' element={<Alimentation/>}>Alimentation</Route>
         </Routes>
      </nav>
    </div>
  );
}

export default App;
