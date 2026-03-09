from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base


class PGImage(Base):
    __tablename__ = "pg_images"

    id = Column(Integer, primary_key=True, index=True)
    image_url = Column(String, nullable=False)
    pg_id = Column(Integer, ForeignKey("pgs.id"))

    pg = relationship("PG", back_populates="images")