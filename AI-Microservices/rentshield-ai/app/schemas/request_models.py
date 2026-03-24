from pydantic import BaseModel

class SentimentRequest(BaseModel):
    text: str


class FakeListingRequest(BaseModel):
    price: float
    rating: float
    review_count: int
    image_count: int
    description_length: int


class RentPredictionRequest(BaseModel):
    room_size: int
    distance: float
    wifi: int
    ac: int
    food: int

class TrustScoreRequest(BaseModel):
    price: float
    rating: float
    review_count: int
    image_count: int
    description_length: int
    room_size: int
    distance: float
    wifi: int
    ac: int
    food: int
    review: str
    city: str