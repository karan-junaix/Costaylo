from pydantic import BaseModel

class FooterResponse(BaseModel):
    id: int
    address: str
    phone: str
    email: str
    admin_contact: str

    class Config:
        from_attributes = True