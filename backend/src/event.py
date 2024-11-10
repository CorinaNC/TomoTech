from fastapi import FastAPI
from pydantic import BaseModel, PositiveInt
from typing import List, Optional
import datetime 
import calendar
import tasks

app = FastAPI()

class Event(BaseModel):
    id : int = None
    task : tasks.Task
    description : Optional[str] = None
    start_time = datetime
    end_time = datetime

events = []

@app.post("/calendar/events")
async def create_event(event : Event):
    event.id = len(events) + 1
    event.start_time = datetime.datetime.now()
    event.description = await()
    event.end_time = await()
    return events.append(event)

@app.get("/calendar/events", response_model = List[Event])
async def read_events