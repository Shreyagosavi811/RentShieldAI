import axios from 'axios';

export const getCoordinates = async (location ) => {
    const response = await axios.get("https://nominatim.openstreetmap.org/search",
        {
            params: {
                q: location,
                format: "json",
                limit: 5,
            },
            headers: {
                "User-Agent": "RentShieldAI"
            }
        }
    );
    if(!response.data.length) {
        throw new Error("Location not found");
    };
    return {
        lat: response.data[0].lat,
        lon: response.data[0].lon
    };
};