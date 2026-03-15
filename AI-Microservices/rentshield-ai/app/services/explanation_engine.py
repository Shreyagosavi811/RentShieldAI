def generate_explanation(data, fake_prob, predicted_rent, scam_flag, sentiment):

    explanations = []

    if data["image_count"] < 2:
        explanations.append("Listing contains very few images.")

    if data["review_count"] < 5:
        explanations.append("Listing has very few reviews.")

    if abs(data["price"] - predicted_rent) > predicted_rent * 0.5:
        explanations.append("Price deviates strongly from expected market rent.")

    if scam_flag:
        explanations.append("Review contains suspicious payment request.")

    if sentiment == "negative":
        explanations.append("Negative sentiment detected in reviews.")

    if len(explanations) == 0:
        explanations.append("Listing appears normal based on available signals.")

    return explanations