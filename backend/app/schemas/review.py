from pydantic import BaseModel
from datetime import datetime

# ✅ Base Schema
class ReviewBase(BaseModel):
    pg_id: int
    user_name: str
    rating: int
    comment: str


# ✅ Create Schema
class ReviewCreate(ReviewBase):
    pass


# ✅ Response Schema
class ReviewResponse(ReviewBase):
    id: int
    helpful: int
    created_at: datetime

    class Config:
        from_attributes = True   # ✅ Pydantic V2 fix