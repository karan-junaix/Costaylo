from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base


class PGAmenity(Base):
    __tablename__ = "pg_amenities"

    id = Column(Integer, primary_key=True, index=True)

    pg_id = Column(Integer, ForeignKey("pg_properties.id"))
    amenity_id = Column(Integer, ForeignKey("amenities.id"))

    # pg = relationship("PG", back_populates="amenity")
    pg = relationship("PG", back_populates="pg_amenities")
    amenity = relationship("Amenity", back_populates="pg_amenities")