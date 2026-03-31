from sqlalchemy import Column, Integer, String
from app.database import Base

class PropertyType(Base):
    __tablename__ = "property_types"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True)