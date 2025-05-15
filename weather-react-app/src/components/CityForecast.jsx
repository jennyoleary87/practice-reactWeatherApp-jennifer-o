import { Link, useParams } from "react-router";

const CityForecast = ({ allCities }) => {
    const { cityName } = useParams();



    const [city] = [...allCities].filter(obj => obj.city == cityName);


    return (
        <>
            <div>
                <h2>{city.city}</h2>
                <p>{city.summary}</p>
                <p>{city.details}</p>

                <Link to="/">Return to main page</Link>
            </div>
        </>
    )
}

export default CityForecast;