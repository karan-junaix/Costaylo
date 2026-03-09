from pydantic import BaseModel
from typing import Optional

class PGCreate(BaseModel):
    title: str
    description: Optional[str] = None
    starting_price: float   # ✅ float
    locality: str
    gender: str
    whatsapp_number: str


class PGResponse(BaseModel):
    id: int
    title: str
    description: Optional[str]
    starting_price: float   # ✅ float
    locality: str
    gender: str
    whatsapp_number: str
    is_available: bool
    latitude: float | None
    longitude: float | None

    class Config:
        from_attributes = True