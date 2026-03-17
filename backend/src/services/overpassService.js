import axios from 'axios';

export const searchPGsByCoordinates = async (lat, lon) => {
   const query = `
[out:json][timeout:25];

(
  node["tourism"~"hotel|hostel|guest_house|motel|apartment"](around:8000,${lat},${lon});
  way["tourism"~"hotel|hostel|guest_house|motel|apartment"](around:8000,${lat},${lon});
  relation["tourism"~"hotel|hostel|guest_house|motel|apartment"](around:8000,${lat},${lon});

  node["amenity"~"hostel|dormitory"](around:8000,${lat},${lon});
  way["amenity"~"hostel|dormitory"](around:8000,${lat},${lon});
  relation["amenity"~"hostel|dormitory"](around:8000,${lat},${lon});

  node["building"="apartments"](around:8000,${lat},${lon});
  way["building"="apartments"](around:8000,${lat},${lon});
);

out tags center;
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
