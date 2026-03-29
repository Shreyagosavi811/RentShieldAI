from fastapi import FastAPI
# from pydantic import BaseModel
# from app.controllers.analysis_controller import analyze_pg

app = FastAPI()

# class PGRequest(BaseModel):
#     name: str
#     location: str
#     rent: int
#     amenities: list
#     description: str
#     reviews: list = []

# @app.post("/analyze")
# def analyze(request: PGRequest):
#     result = analyze_pg(request.dict())
#     return result

@app.get("/")
def root():
    return {"message": "AI Service running"}