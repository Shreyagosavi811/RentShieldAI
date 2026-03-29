import numpy as np

def predict_rent(data):
    # ✅ Extract amenities safely
    amenities = [a.lower() for a in data.get("amenities", [])]

    wifi = 1 if "wifi" in amenities else 0
    ac = 1 if "ac" in amenities else 0
    food = 1 if "food" in amenities or "meals" in amenities else 0

    # ✅ Encode room type
    room_type_map = {
        "single": 1,
        "double": 2,
        "triple": 3
    }

    room_type = room_type_map.get(data.get("roomType", "").lower(), 1)

    # ✅ Create feature array
    features = np.array([[room_type, wifi, ac, food]])

    # ✅ Predict
    prediction = model.predict(features)

    return {
        "predicted_rent": float(prediction[0])
    }