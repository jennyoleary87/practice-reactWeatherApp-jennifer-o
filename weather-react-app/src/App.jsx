import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css'
import CityForecast from './components/CityForecast'
import CityList from './components/CityList';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CityList />} />
          <Route path='/forecast/:cityName' element={<CityForecast />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
