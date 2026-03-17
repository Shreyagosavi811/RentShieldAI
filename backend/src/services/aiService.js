import axios from "axios";

const AI_SERVICE_URL = "http://127.0.0.1:8000/analyze";

const analyzeListing = async (listingData) => {

  try {

    const response = await axios.post(AI_SERVICE_URL, listingData);

    return response.data;

  } catch (error) {

    console.error("AI Service Error:", error.message);

    throw new Error("AI analysis failed");

  }

};

export default analyzeListing;