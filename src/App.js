import { useEffect, useState } from 'react';
import { BrowserRouter, HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.sass';
import Destination from './components/Destination/Destination';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import { moonsData, crewsData, technologiesData } from './data'
import homepage from "./images/homepage-background.jpg"
import homepageTablet from "./images/background-tablet.jpg"
import destination from "./images/destination-background.jpg"
import crew from "./images/crew-background.jpg"
import technology from "./images/technology-background.jpg"
import Crew from './components/Crew/Crew';
import Technology from './components/Technology/Technology';

function App() {

  const [background, setBackground] = useState('')
  const [homepageBg, setHomepageBg] = useState('')
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600 ? true : false)
  
  useEffect(() => {
    const data = localStorage.getItem('background')
    if (data) {
      setBackground(data) }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('background', background)
  }, [background])

  const handleResize = () => {
    if (window.innerWidth <= 820) {
        setHomepageBg(homepageTablet)

    } else {
        setHomepageBg(homepage)
    }
    if (window.innerWidth <= 600) {
      setIsMobile(true)
    } else{
      setIsMobile(false)
    } }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  }, [])

  return (

      <HashRouter>
        <div className='App' style={{ backgroundImage: background ? `url(${background})` : `url(${homepageBg})` }} >
          <Header
            onBackground={setBackground} 
            destination={destination} 
            homepage={homepageBg}
            crew={crew}
            technology={technology}
            mobile={isMobile}
          />
          <Routes>
            <Route
              path='/' 
              element={
                <HomePage 
                  onBackground={setBackground} 
                  destination={destination} 
                  homepage={homepageBg}
                  crew={crew}
                  technology={technology}
                />}
            />
            <Route path='/destination' element={<Destination data={moonsData}/>}/>
            <Route path='/crew' element={<Crew data={crewsData}/>}/>
            <Route path='/technology' element={<Technology data={technologiesData}/>}/>
          </Routes>
          </div>
      </HashRouter>

  );
}

export default App;
