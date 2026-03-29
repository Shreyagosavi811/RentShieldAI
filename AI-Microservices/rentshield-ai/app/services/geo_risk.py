high_risk_cities = [
    "delhi",
    "mumbai",
    "bangalore"
]

medium_risk_cities = [
    "pune",
    "hyderabad",
    "chennai"
]


def analyze_location(city):

    city = city.lower()

    if city in high_risk_cities:
        return "HIGH"

    elif city in medium_risk_cities:
        return "MEDIUM"

    else:
        return "LOW"

