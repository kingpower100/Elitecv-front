import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acceuil from './pages/acceuil';
import Entretien from './pages/entretien';
import Offres from './pages/offres d\'emp';
import Profile from './pages/Profile';
import Reccomendations from './pages/reccomendations';
import { ChakraProvider } from '@chakra-ui/react';

const App: React.FC = () => {


  return (
    <>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Acceuil/>}/>
          <Route path='/Entretien' element={<Entretien/>}/>
          <Route path='/Offres' element={<Offres/>} />
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Reccomendation' element={<Reccomendations/>}/>
        </Routes>
      </BrowserRouter>
      </ChakraProvider>

    </>
      
    );
};

export default App
