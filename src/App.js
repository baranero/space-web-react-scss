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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600 ? true : false)
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 820 ? true : false)
  const [pickedLocation, setPickedLocation] = useState('')

  const locationHandler = (location) => {
    setPickedLocation(location)
    if (pickedLocation === '/' && !isTablet) {
      setBackground(homepage)
    } else if (pickedLocation === "/" && isTablet) {
      setBackground(homepageTablet)
    } else if (pickedLocation === '/destination') {
      setBackground(destination)
    } else if (pickedLocation === '/crew') {
      setBackground(crew)
    } else if (pickedLocation === '/technology') {
      setBackground(technology)
    }
  }

  useEffect(() => {
    const data = localStorage.getItem('background')
    if (data) {
      setBackground(data) }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('background', background)
  }, [background])

  const handleResize = () => {
    if (window.innerWidth <= 600) {
      setIsMobile(true)
    } else{
      setIsMobile(false)
    }
    if (window.innerWidth <= 820) {
      setIsTablet(true)
    } else{
      setIsTablet(false)
    }
  }

    useEffect(() => {
      window.addEventListener("resize", handleResize)
      }, [])

  return (

      <HashRouter>
         <div className='App' style={{ backgroundImage: `url(${background})` }} > 
          <Header
            onBackground={setBackground} 
            destination={destination} 
            homepage={homepage}
            crew={crew}
            technology={technology}
            mobile={isMobile}
            onLocation={locationHandler}
          />
          <Routes>
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
      </HashRouter>

  );
}

export default App;
