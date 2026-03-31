from pydantic import BaseModel
from typing import Optional, List


# -----------------------------
# PG Image Response
# -----------------------------
class PGImageResponse(BaseModel):
    image_url: str

    class Config:
        from_attributes = True


# -----------------------------
# PG Create
# -----------------------------
class PGCreate(BaseModel):
    title: str
    description: Optional[str] = None
    starting_price: float
    locality: str
    gender: str
    whatsapp_number: str


# -----------------------------
# Room Type Response
# -----------------------------
class RoomTypeResponse(BaseModel):
    type: str
    price: float
    available: bool
    inclusions: List[str]


# -----------------------------
# PG List Response (Used in /pgs)
# -----------------------------
class PGResponse(BaseModel):
    id: int
    title: str
    description: Optional[str]
    starting_price: float
    locality: str
    gender: str
    whatsapp_number: str
    is_available: bool
    latitude: float | None
    longitude: float | None

    images: List[PGImageResponse] = []

    class Config:
        from_attributes = True


# -----------------------------
# PG Detail Response (/pg/{id})
# -----------------------------
class PGDetailResponse(BaseModel):
    id: int
    title: str
    description: Optional[str]
    starting_price: float
    locality: str
    gender: str
    whatsapp_number: str
    is_available: bool
    latitude: float | None
    longitude: float | None

    images: List[PGImageResponse] = []
    room_types: List[RoomTypeResponse]

    class Config:
        from_attributes = True