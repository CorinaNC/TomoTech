from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

app = FastAPI()

class EventDate(BaseModel):
    year: int
    month: int
    day: int
    
class CalendarEvent(BaseModel):
    id: int
    description: Optional[str] = None
    date: EventDate
    end_time: str

events = [CalendarEvent(id=1, description="hey the backend is working!", date=EventDate(year=2024, month=11, day=10), end_time="12:00")]

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/events/", response_model=CalendarEvent)
async def create_task(event: CalendarEvent):
    if event.id is None:
        event.id = len(events)+1
    events.append(event)
    return event

@app.get("/events/", response_model=List[CalendarEvent])
async def read_events():
    return events

@app.put("/events/{event_id}", response_model=CalendarEvent)
async def update_event(event_id: int, updated_event: CalendarEvent):
    for i, event in enumerate(events):
        if event.id == event_id:
            events[i] = updated_event
            return updated_event
    raise HTTPException(status_code=404, detail="Event not found")

@app.delete("/events/{event_id}", response_model=List[CalendarEvent])
async def delete_event(event_id: int):
    global events
    events = [event for event in events if event.id != event_id]
    return events