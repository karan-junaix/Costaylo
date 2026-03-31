from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.footer import FooterContact
from app.schemas.footer_schema import FooterResponse

router = APIRouter(prefix="/footer", tags=["Footer"])

@router.get("/", response_model=FooterResponse)
def get_footer(db: Session = Depends(get_db)):
    footer = db.query(FooterContact).first()
    return footer