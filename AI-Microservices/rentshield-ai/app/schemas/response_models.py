from pydantic import BaseModel
from typing import List


class SentimentResponse(BaseModel):
    sentiment: str
    confidence: float


class FakeListingResponse(BaseModel):
    fake_listing: bool
    fake_probability: float


class RentPredictionResponse(BaseModel):
    predicted_rent: float


class TrustScoreResponse(BaseModel):
    trust_score: int
    risk_level: str
    confidence: float
    geo_risk: str

    scam_detected: bool
    scam_phrases: List[str]

    warnings: List[str]
    explanation: List[str]

    predicted_rent: float
    fake_probability: float