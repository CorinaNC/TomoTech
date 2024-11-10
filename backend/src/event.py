from fastapi import FastAPI
from pydantic import BaseModel, PositiveInt
from enum import Enum
import datetime 
import calendar

app = FastAPI()

class Event(BaseModel):
    id : int = None
    description : str | None = None
    start_time = datetime
    end_time = datetime

@app.post("/calendar/events")
async def getCalendarEvents()
    return 
