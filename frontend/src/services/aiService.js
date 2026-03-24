import axios from "axios";

const AI_SERVICE_URL = "http://127.0.0.1:8000/analyze";

const analyzeListing = async (listingData) => {
  try {
    const response = await axios.post(AI_SERVICE_URL, listingData, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10000,
    });

    return {
      success: true,
      data: response.data,
    };

  } catch (error) {
    console.error("AI Service Error:", error);

    if (error.response) {
      return {
        success: false,
        error: error.response.data?.message || "AI service error",
      };
    } else if (error.request) {
      return {
        success: false,
        error: "AI service not responding",
      };
    } else {
      return {
        success: false,
        error: error.message,
      };
    }
  }
};

export default analyzeListing;