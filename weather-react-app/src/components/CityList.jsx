import { Link } from "react-router";
import weatherData from "./WeatherData";

const CityList = () => {
    const cities = Object.keys(weatherData);

    return (
        <div>
            <h1>LIST OF CITIES:</h1>
            <br /> <br />
            <div id="city-list">
                <ul>
                    {cities.map((city) => (
                        <li key={city}>
                            <Link to={`/forecast/${city}`}>{city}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default CityList;