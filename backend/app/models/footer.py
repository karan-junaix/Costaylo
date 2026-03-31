from sqlalchemy import Column, Integer, String, Text
from app.database import Base

class FooterContact(Base):
    __tablename__ = "footer_contact"

    id = Column(Integer, primary_key=True, index=True)
    address = Column(Text)
    phone = Column(String(20))
    email = Column(String(100))
    admin_contact= Column(String(20))