import axios from "axios";

const AI_BASE_URL = "http://127.0.0.1:8000";

export const analyzeListing = async (data) => {
  try {
    const response = await axios.post(
      `${AI_BASE_URL}/trust-score`,
      {
        city: data.city,
        price: data.price,
        review: data.review,
        rating: data.rating || 4,
        review_count: data.review_count || 10,
        image_count: data.image_count || 5,
        description_length: data.description?.length || 50,
        room_size: data.room_size || 2,
        distance: data.distance || 3,
        wifi: data.wifi ? 1 : 0,
        ac: data.ac ? 1 : 0,
        food: data.food ? 1 : 0
      }
    );

    return response.data;

  } catch (error) {
    console.error("AI Service Error:", error.message);

    throw new Error("AI service failed");
  }
};