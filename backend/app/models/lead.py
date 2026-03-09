from sqlalchemy import Column, Integer, String, Date, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from app.database import Base

class Lead(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    phone = Column(String, nullable=False)
    email = Column(String, nullable=True)
    move_in_date = Column(Date, nullable=True)

    pg_id = Column(Integer, ForeignKey("pgs.id"))
    created_at = Column(DateTime, default=datetime.utcnow)

    pg = relationship("PG", back_populates="leads")