from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.pg import PG
from app.schemas.pg_schema import PGCreate,PGResponse
from app.services.geocode_service import get_coordinates

router = APIRouter(prefix="/admin", tags=["Admin"])



@router.post("/", response_model=PGResponse, status_code=201)
def add_pg(data: PGCreate, db: Session = Depends(get_db)):

    if data.starting_price <= 0:
        raise HTTPException(status_code=400, detail="Invalid price")

    #  Get coordinates
    lat, lng = get_coordinates(data.locality)
    if lat is None or lng is None:
        raise HTTPException(status_code=400, detail="Could not determine coordinates for the given locality. Please check the address or try again later.")

    new_pg = PG(
        **data.model_dump(),
        latitude=lat,
        longitude=lng
    )

    db.add(new_pg)
    db.commit()
    db.refresh(new_pg)

    return new_pg