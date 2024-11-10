from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from pydantic import PositiveInt
from enum import Enum

app = FastAPI()

class Expressions(str, Enum):
    Happy = "Happy"
    Sad = "Sad"
    Angry = "Angry"
    Hungry = "Hungry"
    Tired = "Tired"

class Tomagatchi(BaseModel):
    name : str
    velocity : float
    dt : int
    expression : Expressions
    hungerLevel : PositiveInt

@app.get("/tomagatchi")
async def getTomo(num : int | None):
    return num


if __name__ == "__main__":
    tomo = Tomagatchi("One", 2, 3, "Happy", 4)
    getTomo(22)