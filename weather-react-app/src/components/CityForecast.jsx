import { Link, useParams } from "react-router";
import { useEffect, useState, useRef } from "react";
import weatherData from "./WeatherData";

const CityForecast = () => {
    const { cityName } = useParams();
    const [cityData, setCityData] = useState("");
    const [loading, setLoading] = useState(true);
    const detailsRef = useRef(null);

    useEffect(() => {
        // Simulate fetching weather data
        setTimeout(() => {
            setCityData(weatherData[cityName]);
            setLoading(false);
        }, 500);
    }, [cityName]);

    const scrollToDetails = () => {
        detailsRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div>
                {cityData ? (
                    <>
                        <h1>Weather in {cityName}</h1>
                        <br /><br />
                        <button onClick={scrollToDetails}>View Details</button>
                        <br /><br />
                        <div ref={detailsRef}>
                            <p>{cityData.details}</p>
                        </div>
                        <br /><br />
                        <Link to="/">Return to main page</Link>
                    </>
                ) : (
                    <div>
                        <p>Loading ...</p>
                        <Link to="/">Return to main page</Link>
                    </div>
                )}
            </div>
        </>
    )
}

export default CityForecast;