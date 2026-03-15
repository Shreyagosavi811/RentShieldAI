import pandas as pd
import numpy as np

np.random.seed(42)

size = 10000

data = {
    "price": np.random.randint(3000, 25000, size),
    "rating": np.round(np.random.uniform(2.0, 5.0, size), 2),
    "review_count": np.random.randint(0, 500, size),
    "image_count": np.random.randint(0, 15, size),
    "description_length": np.random.randint(20, 500, size),
    "room_size": np.random.randint(80, 600, size),
    "distance": np.round(np.random.uniform(0.5, 15, size), 2),
    "wifi": np.random.randint(0, 2, size),
    "ac": np.random.randint(0, 2, size),
    "food": np.random.randint(0, 2, size),
}

df = pd.DataFrame(data)

# Fake listing probability pattern
df["fake_listing"] = (
    (df["image_count"] < 2) &
    (df["review_count"] < 5) &
    (df["description_length"] < 50)
).astype(int)

df.to_csv("rental_dataset.csv", index=False)

print("Dataset generated successfully!")