from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base


class RoomType(Base):
    __tablename__ = "room_types"

    id = Column(Integer, primary_key=True, index=True)
    room_type = Column(String, nullable=False)  # 2 Sharing, 3 Sharing
    price = Column(Float, nullable=False)
    available_beds = Column(Integer, default=0)

    pg_id = Column(Integer, ForeignKey("pgs.id"))

    pg = relationship("PG", back_populates="room_types")