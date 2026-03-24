export const createListing = async (req, res) => {

  try {

    const { title, description, city, price, review } = req.body;

    // 1️⃣ Save listing
    const { data: listingData, error: listingError } = await supabase
      .from("listings")
      .insert([
        {
          title,
          description,
          city,
          price,
          review
        }
      ])
      .select();

    if (listingError) {
      throw listingError;
    }

    const listing = listingData[0];

    // 2️⃣ Send data to AI
    const aiResult = await analyzeListing({
      city,
      price,
      review
    });

    // 3️⃣ Store AI analysis
    await supabase
      .from("analysis")
      .insert([
        {
          listing_id: listing.id,
          trust_score: aiResult.trust_score,
          risk_level: aiResult.risk_level,
          confidence: aiResult.confidence,
          geo_risk: aiResult.geo_risk,
          scam_detected: aiResult.scam_detected,
          predicted_rent: aiResult.predicted_rent,
          fake_probability: aiResult.fake_probability
        }
      ]);

    // 4️⃣ Send response
    res.json({
      status: "success",
      listing,
      analysis: aiResult
    });

  } catch (error) {

    res.status(500).json({
      status: "error",
      message: error.message
    });

  }

};