from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import date, datetime


class LeadCreate(BaseModel):
    name: str
    phone: str
    pg_id: int
    email: Optional[EmailStr] = None
    move_in_date: Optional[date] = None

    model_config = {"extra": "forbid"}


class LeadResponse(BaseModel):
    id: int
    name: str
    phone: str
    email: Optional[EmailStr] = None
    move_in_date: Optional[date] = None
    pg_id: Optional[int] = None
    created_at: datetime

    model_config = {"from_attributes": True}

