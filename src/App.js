import { Fragment, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.sass';
import Destination from './components/Destination/Destination';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import {moonsData} from './data'
import homepage from "./images/homepage-background.jpg"
import destination from "./images/destination-background.jpg"


console.log(moonsData);

function App() {

  const [background, setBackground] = useState(homepage)

  return (

      <BrowserRouter>
        <div className='App' style={{ backgroundImage: `url(${background})` }} >
          <Header onBackground={setBackground} destination={destination} homepage={homepage} />
          <Routes>``
            <Route path='/' element={<HomePage/>}/>
            <Route path='/destination' element={<Destination data={moonsData}/>}/>
          </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;
