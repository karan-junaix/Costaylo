from sqlalchemy import Column, Integer, String
from app.database import Base

class OccupancyType(Base):
    __tablename__ = "occupancy_types"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True)