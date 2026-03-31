from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy import ForeignKey
from datetime import datetime
from app.database import Base

# import related model classes so SQLAlchemy can resolve string-based relationships
from app.models.pg_image import PGImage
from app.models.room_type import RoomType
from app.models.amenity import Amenity
from app.models.lead import Lead
from app.models.review import Review
from app.models.pg_rooms import PGRoom

class PG(Base):
    __tablename__ = "pg_properties"

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
    is_featured = Column(Boolean, default=False)
    # Relationships
    images = relationship("PGImage", back_populates="pg", cascade="all, delete")
   # room_types = relationship("RoomType", back_populates="pg", cascade="all, delete")
    rooms = relationship("PGRoom", back_populates="pg", cascade="all, delete")
    # amenities = relationship("Amenity", back_populates="pg", cascade="all, delete")
    leads = relationship("Lead", back_populates="pg", cascade="all, delete")
    reviews = relationship("Review", back_populates="pg", cascade="all, delete")
    pg_amenities = relationship("PGAmenity", back_populates="pg")

    amenities = relationship(
        "Amenity",
        secondary="pg_amenities",
        viewonly=True
    )
    occupancy_id = Column(Integer, ForeignKey("occupancy_types.id"))
    property_type_id = Column(Integer, ForeignKey("property_types.id"))
    occupancy = relationship("OccupancyType")
    property_type = relationship("PropertyType")


