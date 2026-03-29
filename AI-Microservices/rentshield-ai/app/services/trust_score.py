from app.services.fake_detector import detect_fake
from app.services.rent_predictor import predict_rent
from app.services.sentiment_analyzer import analyze_sentiment
from app.services.explanation_engine import generate_explanation
from app.services.geo_risk import analyze_location
from app.services.scam_detector import detect_scam


def get_risk_level(score):

    if score >= 80:
        return "LOW"

    elif score >= 50:
        return "MEDIUM"

    else:
        return "HIGH"


def calculate_trust_score(data):

    warnings = []
    explanation = []

    # Fake listing detection
    fake = detect_fake(data)
    fake_prob = fake["fake_probability"]

    # Rent prediction
    rent = predict_rent(data)
    predicted_rent = rent["predicted_rent"]

    # Sentiment analysis
    sentiment = analyze_sentiment({"text": data["review"]})

    # Scam phrase detection
    scam_result = detect_scam_phrases(data["review"])

    score = 100

    # Scam phrases penalty
    if scam_result["scam_detected"]:
        score -= 25
        warnings.append("Scam phrases detected in review")

    # Fake listing penalty
    if fake_prob > 0.6:
        score -= 40
        warnings.append("Listing may be fake")

    # Price anomaly detection
    if abs(data["price"] - predicted_rent) > predicted_rent * 0.5:
        score -= 20
        warnings.append("Price deviates significantly from market")

    # Sentiment penalty
    if sentiment["sentiment"] == "negative":
        score -= 10
        warnings.append("Negative reviews detected")

    score = max(0, score)

    # Generate AI explanation
    explanation = generate_explanation(
        data,
        fake_prob,
        predicted_rent,
        scam_result,
        sentiment["sentiment"]
    )

    # Risk level
    risk_level = get_risk_level(score)

    # Geo risk
    geo_risk = get_geo_risk(data["city"])

    # AI confidence
    confidence = round(1 - fake_prob, 2)

    return {
        "trust_score": score,
        "risk_level": risk_level,
        "confidence": confidence,
        "geo_risk": geo_risk,
        "scam_detected": scam_result["scam_detected"],
        "scam_phrases": scam_result["scam_phrases"],
        "warnings": warnings,
        "explanation": explanation,
        "predicted_rent": predicted_rent,
        "fake_probability": fake_prob
    }