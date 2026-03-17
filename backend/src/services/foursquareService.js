import axios from 'axios';

const API_KEY = process.env.FOURSQUARE_API_KEY;

export const getPlaceDetails = async (lat, lon, name) => {
    try {
        const response = await axios.get("https://api.foursquare.com/v3/places/search", 
            {
                headers: {
                    Authorization: API_KEY
                },
                params: {
                    query: name,
                    ll: `${lat},${lon}`,
                    limit: 1
                }
            }
        );
        return response.data.results[0];
    } catch (error) {
        return null;
    }
};
