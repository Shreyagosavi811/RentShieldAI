import axios from "axios";

export const analyzePG = async (req, res) => {
  try {
    const pgData = req.body;
    
    console.log(pgData);
    
    if (!pgData) {
      return res.status(400).json({ message: "PG data is required" });
    }

    const response = await axios.post("http://localhost:8000/analyze", pgData);
    console.log(response.data);
    
    if (!response.data.success) {
      throw new Error("AI Analysis Failed");
    }
    res.json(response.data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "AI Analysis Failed" });
  }
};