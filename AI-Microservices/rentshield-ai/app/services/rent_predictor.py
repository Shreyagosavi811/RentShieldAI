import joblib
import numpy as np

model = joblib.load("models/rent_model.pkl")

def predict_rent(data):

    features = np.array([[
        data["room_size"],
        data["distance"],
        data["wifi"],
        data["ac"],
        data["food"]
    ]])

    prediction = model.predict(features)

    return {
        "predicted_rent": float(prediction[0])
    }