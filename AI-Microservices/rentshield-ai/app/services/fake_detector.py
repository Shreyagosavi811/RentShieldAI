import joblib
import numpy as np

model = joblib.load("models/fake_listing_model.pkl")

def detect_fake(data):

    fake_probability = 0
    warnings = []

    if data["image_count"] < 2:
        fake_probability += 0.3
        warnings.append("Very few images")

    if data["review_count"] < 5:
        fake_probability += 0.3
        warnings.append("Very few reviews")

    if data["description_length"] < 50:
        fake_probability += 0.2
        warnings.append("Very short description")

    if data["rating"] < 2.5:
        fake_probability += 0.2
        warnings.append("Low rating")

    fake_listing = fake_probability > 0.6

    return {
        "fake_listing": fake_listing,
        "fake_probability": round(fake_probability, 2)
    }