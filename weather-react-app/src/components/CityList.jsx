import { Link } from "react-router";
import weatherData from "./WeatherData";


const CityList = () => {

    const allCities = weatherData.map(city => (
        { ...city }
    ))

    return (
        <div>
            <h1>List of cities:</h1>

            <div>
                <ul>
                    {allCities.map((city, index) => (
                        <div>
                            <li key={index}>
                                <Link to={`/forecast/${city.city}`}>{city.city}</Link>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default CityList;