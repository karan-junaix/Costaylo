from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.orm import relationship
from app.database import Base


class RoomType(Base):
    __tablename__ = "room_types"

    id = Column(Integer, primary_key=True, index=True)

    type_name = Column(String, nullable=False)
    description = Column(Text)

    rooms = relationship("PGRoom", back_populates="room_type")