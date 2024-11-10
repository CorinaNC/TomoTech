from fastapi import FastAPI
from pydantic import BaseModel, PositiveInt
from enum import Enum

app = FastAPI()

class Expressions(str, Enum):
    Happy = "Happy"
    Sad = "Sad"
    Angry = "Angry"
    Hungry = "Hungry"
    Tired = "Tired"

class Tomagatchi(BaseModel):
    name: str
    velocity: float
    dt: int
    expression: Expressions
    hungerLevel: PositiveInt

@app.post("/tomagatchi")
async def create_tomagatchi(tomo: Tomagatchi):
    return {
        "name": tomo.name,
        "velocity": tomo.velocity,
        "dt": tomo.dt,
        "expression": tomo.expression.value,
        "hungerLevel": tomo.hungerLevel
    }
