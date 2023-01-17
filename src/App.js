import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.sass';
import Destination from './components/Destination/Destination';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import { moonsData, crewsData, technologiesData } from './data'
import homepage from "./images/homepage-background.jpg"
import destination from "./images/destination-background.jpg"
import crew from "./images/crew-background.jpg"
import technology from "./images/technology-background-2.jpg"
import Crew from './components/Crew/Crew';
import Technology from './components/Technology/Technology';

function App() {

  const [background, setBackground] = useState('')

  useEffect(() => {
    const data = localStorage.getItem('background')
    if (data) {
      setBackground(data) }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('background', background)
  }, [background])

  return (

      <BrowserRouter>
        <div className='App' style={{ backgroundImage: background ? `url(${background})` : `url(${homepage})` }} >
          <Header
            onBackground={setBackground} 
            destination={destination} 
            homepage={homepage}
            crew={crew}
            technology={technology}
          />
          <Routes>``
            <Route
              path='/' 
              element={
                <HomePage 
                  onBackground={setBackground} 
                  destination={destination} 
                  homepage={homepage}
                  crew={crew}
                  technology={technology}
                />}
            />
            <Route path='/destination' element={<Destination data={moonsData}/>}/>
            <Route path='/crew' element={<Crew data={crewsData}/>}/>
            <Route path='/technology' element={<Technology data={technologiesData}/>}/>
          </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;
