import axios from 'axios';

export const searchPGsByCoordinates = async (lat, lon) => {
    const query = `
    [out:json];
    (
    node["amenity"="hostel"](around:3000,${lat},${lon});
    node["tourism"="guest_house"](around:3000,${lat},${lon});
    node["tourism"="lodging"](around:3000,${lat},${lon});
    )
    out body;
    `;
    const response = await axios.post("https://overpass-api.de/api/interpreter",
        query, 
        {
            headers: {
                "Content-Type": "text/plain",
            }
        }
    );
    return response.data.elements;
}
