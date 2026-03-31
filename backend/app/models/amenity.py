from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base


class Amenity(Base):
    __tablename__ = "amenities"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    icon = Column(String)

   # pg_id = Column(Integer, ForeignKey("pg_properties.id"))

   # pg = relationship("PG", back_populates="amenity")
    pg_amenities = relationship("PGAmenity", back_populates="amenity")
    pgs = relationship(
        "PG",
        secondary="pg_amenities",
        viewonly=True
    )