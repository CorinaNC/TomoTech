from fastapi import FastAPI
from pydantic import BaseModel, PositiveInt
from enum import Enum
import datetime 

app = FastAPI()

class Calendar(BaseModel):
    year : PositiveInt
    month : PositiveInt
    day : PositiveInt

@app.post("/calendar")
async def getCurrentDate():
    

