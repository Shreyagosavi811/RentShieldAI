import pandas as pd
from sklearn.ensemble import RandomForestRegressor
import joblib

# Synthetic dataset
data = {
    "room_size": [120,150,200,250,300,180],
    "distance": [2.5,1.8,1.2,0.5,0.3,1.0],
    "wifi": [0,1,1,1,1,0],
    "ac": [0,0,1,1,1,0],
    "food": [0,1,1,1,1,0],
    "rent": [3500,5000,7000,9000,11000,6000]
}

df = pd.DataFrame(data)

X = df.drop("rent", axis=1)
y = df["rent"]

model = RandomForestRegressor()
model.fit(X, y)

joblib.dump(model, "app/models/rent_model.pkl")

print("Rent model trained successfully")
