import { getPlaceDetails } from "../services/foursquareService.js";

export const getPGDetails = async (req, res) => {

  const { id } = req.params;

  const pg = await getPGFromOSM(id);

  const fsData = await getPlaceDetails(pg.lat, pg.lon, pg.name);

  res.json({
    id: pg.id,
    name: pg.name,
    lat: pg.lat,
    lon: pg.lon,
    category: pg.category,
    address: pg.address,

    rating: fsData?.rating,
    images: fsData?.photos,
    reviews: fsData?.reviews,
    website: fsData?.website
  });

};