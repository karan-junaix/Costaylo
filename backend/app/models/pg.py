from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from app.database import Base

# import related model classes so SQLAlchemy can resolve string-based relationships
from app.models.pg_image import PGImage
from app.models.room_type import RoomType
from app.models.amenity import Amenity
from app.models.lead import Lead
from app.models.review import Review


class PG(Base):
    __tablename__ = "pgs"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(String, nullable=True)
    locality = Column(String, nullable=False)
    gender = Column(String, nullable=False)
    whatsapp_number = Column(String, nullable=False)
    starting_price = Column(Float, nullable=False)
    is_available = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    latitude = Column(Float, nullable=True)
    longitude = Column(Float, nullable=True)
    # Relationships
    images = relationship("PGImage", back_populates="pg", cascade="all, delete")
    room_types = relationship("RoomType", back_populates="pg", cascade="all, delete")
    amenities = relationship("Amenity", back_populates="pg", cascade="all, delete")
    leads = relationship("Lead", back_populates="pg", cascade="all, delete")
    reviews = relationship("Review", back_populates="pg", cascade="all, delete")