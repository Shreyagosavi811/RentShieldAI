import cache from "../utils/cache.js";
import { getCoordinates } from "../services/geocodeService.js";
import { searchPGsByCoordinates } from "../services/overpassService.js";
import { getPlaceDetails } from "../services/foursquareService.js";

// -------------------------------
// Format Address
// -------------------------------
const getAddress = (tags = {}) => {
  const parts = [
    tags["addr:housename"],
    tags["addr:housenumber"],
    tags["addr:street"],
    tags["addr:suburb"],
    tags["addr:city"],
    tags["addr:state"],
    tags["addr:postcode"],
    tags["addr:country"]
  ];

  return parts.filter(Boolean).join(", ") || "Address unavailable";
};

// -------------------------------
// Detect Accommodation Type
// -------------------------------
const getCategory = (tags = {}) => {
  if (tags.tourism) return tags.tourism;
  if (tags.amenity) return tags.amenity;
  if (tags.building === "apartments") return "apartment";
  return "pg";
};

// -------------------------------
// Search Controller
// -------------------------------
export const searchPG = async (req, res) => {
  try {
    const { location } = req.query;

    if (!location) {
      return res.status(400).json({
        success: false,
        message: "Location query parameter is required"
      });
    }

    // -------------------------------
    // Cache Check
    // -------------------------------
    const cacheKey = `pg-search-${location.toLowerCase()}`;
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
      return res.json({
        success: true,
        source: "cache",
        count: cachedData.length,
        data: cachedData
      });
    }

    // -------------------------------
    // Get Coordinates
    // -------------------------------
    const { lat, lon } = await getCoordinates(location);

    if (!lat || !lon) {
      return res.status(404).json({
        success: false,
        message: "Location not found"
      });
    }

    // -------------------------------
    // Fetch PG data from OSM
    // -------------------------------
    const osmPlaces = await searchPGsByCoordinates(lat, lon);

    if (!osmPlaces || osmPlaces.length === 0) {
      return res.json({
        success: true,
        count: 0,
        data: []
      });
    }

    // -------------------------------
    // Format Results
    // -------------------------------
    const formatted = osmPlaces.map((place) => {
      const latitude = place.lat || place.center?.lat;
      const longitude = place.lon || place.center?.lon;

      return {
        id: place.id,
        name: place.tags?.name || "PG / Hostel",
        category: getCategory(place.tags),
        lat: latitude,
        lon: longitude,
        address: getAddress(place.tags),
        phone: place.tags?.phone || null,
        website: place.tags?.website || null
      };
    });

    // -------------------------------
    // Remove duplicates
    // -------------------------------
    const uniqueResults = [
      ...new Map(formatted.map((item) => [item.id, item])).values()
    ];

    // -------------------------------
    // Cache Results
    // -------------------------------
    cache.set(cacheKey, uniqueResults, 3600); // 1 hour cache

    // -------------------------------
    // Send Response
    // -------------------------------
    res.json({
      success: true,
      source: "osm",
      count: uniqueResults.length,
      data: uniqueResults
    });

  } catch (error) {
    console.error("PG Search Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error while searching PGs"
    });
  }
};