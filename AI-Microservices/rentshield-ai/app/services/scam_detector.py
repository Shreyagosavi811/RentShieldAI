SCAM_PHRASES = [
    "deposit outside the app",
    "pay via whatsapp",
    "payment on whatsapp",
    "advance before visit",
    "send money first",
    "pay before seeing room",
    "contact on telegram",
    "only bank transfer",
    "security deposit via upi"
]


def detect_scam_phrases(text: str):

    text = text.lower()
    detected = []

    for phrase in SCAM_PHRASES:
        if phrase in text:
            detected.append(phrase)

    return {
        "scam_detected": len(detected) > 0,
        "scam_phrases": detected
    }