from sqlalchemy import Column, Integer, ForeignKey, DECIMAL
from sqlalchemy.orm import relationship
from app.database import Base


class PGRoom(Base):
    __tablename__ = "pg_rooms"

    id = Column(Integer, primary_key=True, index=True)

    pg_id = Column(Integer, ForeignKey("pg_properties.id"))
    room_type_id = Column(Integer, ForeignKey("room_types.id"))

    price = Column(DECIMAL)
    total_rooms = Column(Integer)
    available_rooms = Column(Integer)
    security_deposit=Column(Integer)

    pg = relationship("PG", back_populates="rooms")
    room_type = relationship("RoomType", back_populates="rooms")