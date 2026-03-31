from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base


class City(Base):
    __tablename__ = "cities"

    id = Column(Integer, primary_key=True, index=True)

    state_id = Column(Integer, ForeignKey("states.id"))

    name = Column(String, nullable=False)

    state = relationship("State", back_populates="cities")