from app.services.fake_detector import detect_fake
from app.services.geo_risk import analyze_location
from app.services.rent_predictor import predict_rent
from app.services.scam_detector import detect_scam
from app.services.sentiment_analyzer import analyze_sentiment
from app.services.trust_score import calculate_trust_score
from app.services.explanation_engine import generate_explanation

def analyze_pg(pg_data):
    try:
        # Call all models
        fake_score = detect_fake(pg_data)
        location_risk = analyze_location(pg_data["location"])
        rent_analysis = predict_rent(pg_data)
        scam_score = detect_scam(pg_data)
        sentiment = analyze_sentiment(pg_data.get("reviews", []))
        trust = calculate_trust(pg_data)

        # Combine results
        overall_score = int(
            (fake_score + (100 - location_risk) + rent_analysis["score"] +
             (100 - scam_score) + sentiment + trust) / 6
        )

        explanation = generate_explanation({
            "fake": fake_score,
            "location": location_risk,
            "rent": rent_analysis,
            "scam": scam_score,
            "sentiment": sentiment,
            "trust": trust
        })

        return {
            "overallScore": overall_score,
            "pricingFairness": rent_analysis["score"],
            "authenticity": fake_score,
            "locationSafety": 100 - location_risk,
            "scamRisk": 100 - scam_score,
            "sentiment": sentiment,
            "trust": trust,
            "explanation": explanation
        }

    except Exception as e:
        return {"error": str(e)}