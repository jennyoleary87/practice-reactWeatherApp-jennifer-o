import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css'
import CityForecast from './components/CityForecast'
import CityList from './components/CityList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CityForecast />
      <CityList />
      <weatherData />
      <BrowserRouter>
        <Routes>
          <Route path='/city/:id' element={<Forecast allCities={weatherData} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
