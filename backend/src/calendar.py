from fastapi import FastAPI
from pydantic import BaseModel, PositiveInt
from enum import Enum
import datetime 

app = FastAPI()

class Calendar(BaseModel):
    id : int = None
    description : str | None = None
    start_time = datetime
    end_time = datetime

