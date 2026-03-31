from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from app.database import Base

class UserType(Base):
    __tablename__ = "user_types"

    id = Column(Integer, primary_key=True, index=True)
    type_name = Column(String, nullable=False, unique=True)

    users = relationship("User", back_populates="user_type")