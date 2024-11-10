from fastapi import FastAPI
from pydantic import BaseModel, PositiveInt
from enum import Enum

app = FastAPI()

@app.get("/")
async def basic():
    return{"hello" : "message"}