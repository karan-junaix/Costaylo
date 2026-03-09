from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base


class Amenity(Base):
    __tablename__ = "amenities"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)

    pg_id = Column(Integer, ForeignKey("pgs.id"))

    pg = relationship("PG", back_populates="amenities")