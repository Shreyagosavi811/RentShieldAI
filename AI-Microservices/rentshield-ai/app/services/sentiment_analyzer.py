from transformers import pipeline

sentiment_model = pipeline("sentiment-analysis")

def analyze_sentiment(data):

    text = data["text"]

    result = sentiment_model(text)[0]

    return {
        "sentiment": result["label"],
        "confidence": result["score"]
    }