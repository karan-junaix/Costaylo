from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from app.database import Base
from datetime import datetime



class Review(Base):
    __tablename__ = "reviews"

    id = Column(Integer, primary_key=True, index=True)
    pg_id = Column(Integer, ForeignKey("pgs.id"))  # ✅ VERY IMPORTANT
    user_name = Column(String, nullable=False)
    rating = Column(Integer, nullable=False)
    comment = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)  # ✅ ADD THIS
    helpful = Column(Integer, default=0)
    pg = relationship("PG", back_populates="reviews")