from fastapi import FastAPI
from pydantic import BaseModel
from app.controllers.analysis_controller import analyze_pg

from app.schemas.request_models import (
    SentimentRequest,
    FakeListingRequest,
    RentPredictionRequest,
    TrustScoreRequest
)

from app.schemas.response_models import (
    SentimentResponse,
    FakeListingResponse,
    RentPredictionResponse,
    TrustScoreResponse
)

from app.services.sentiment_analyzer import analyze_sentiment
from app.services.fake_detector import detect_fake
from app.services.rent_predictor import predict_rent
from app.services.trust_score import calculate_trust_score

app = FastAPI(
    title="RentShield AI Service",
    description="AI microservice for rental listing risk analysis",
    version="1.0"
)

class PGRequest(BaseModel):
    name: str
    image_count: list = []
    location: str
    roomType: str
    facilities: list
    description: str
    rules: str
    rent: int
    deposit: int
    reviews: list = []

@app.post("/analyze")
def analyze(request: PGRequest):
    result = analyze_pg(request.dict())
    print("Incoming Data:", result)  # 👈 ADD THIS
    return result


@app.get("/")
def home():
    return {"message": "RentShield AI running"}


@app.post("/sentiment", response_model=SentimentResponse)
def sentiment(data: SentimentRequest):
    return analyze_sentiment(data.dict())


@app.post("/detect-fake", response_model=FakeListingResponse)
def fake_listing(data: FakeListingRequest):
    return detect_fake(data.dict())


@app.post("/predict-rent", response_model=RentPredictionResponse)
def rent_prediction(data: RentPredictionRequest):
    return predict_rent(data.dict())


@app.post("/trust-score", response_model=TrustScoreResponse)
def trust_score(data: TrustScoreRequest):
    return calculate_trust_score(data.dict())

@app.post("/analyze-listing")
def analyze_listing(data: TrustScoreRequest):

    data_dict = data.dict()

    sentiment_result = analyze_sentiment({"text": data_dict["review"]})
    fake_result = detect_fake(data_dict)
    rent_result = predict_rent(data_dict)
    trust_result = calculate_trust_score(data_dict)

    return {
        "trust_score": trust_result["trust_score"],
        "warnings": trust_result["warnings"],
        "explanation": trust_result["explanation"],
        "predicted_rent": rent_result["predicted_rent"],
        "fake_probability": fake_result["fake_probability"],
        "sentiment": sentiment_result
    }