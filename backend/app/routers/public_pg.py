from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.pg import PG
from app.schemas.pg_schema import PGResponse
from fastapi import Query
from sqlalchemy import text
import math

router = APIRouter(prefix="/pgs", tags=["Public PGs"])
'''@router.get("/nearby", response_model=list[PGResponse])
def get_nearby_pgs(lat: float, lng: float, db: Session = Depends(get_db)):

    pgs = db.query(PG).all()

    nearby = []

    for pg in pgs:
        if pg.latitude and pg.longitude:
            nearby.append(pg)

    return nearby'''

def haversine(lat1, lon1, lat2, lon2):
    R = 6371  # Earth radius in KM

    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)

    a = (
        math.sin(dlat / 2) ** 2
        + math.cos(math.radians(lat1))
        * math.cos(math.radians(lat2))
        * math.sin(dlon / 2) ** 2
    )

    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))

    return R * c


@router.get("/nearby",response_model=list[PGResponse])
def get_nearby_pgs(lat: float, lng: float, db: Session = Depends(get_db)):

    all_pgs = db.query(PG).all()

    nearby = []

    for pg in all_pgs:
        if pg.latitude and pg.longitude:
            distance = haversine(lat, lng, pg.latitude, pg.longitude)

            if distance <= 5:   # ⭐ only 5 km radius
                nearby.append(pg)

    return nearby

# ✅ Get all PGs
@router.get("/", response_model=list[PGResponse])
def get_all_pgs(db: Session = Depends(get_db)):
    return db.query(PG).all()

# ✅ Get single PG by ID
from app.schemas.pg_schema import PGResponse


@router.get("/{pg_id}", response_model=PGResponse)
def get_pg_by_id(pg_id: int, db: Session = Depends(get_db)):
    pg = db.query(PG).filter(PG.id == pg_id).first()

    if not pg:
        raise HTTPException(status_code=404, detail="PG not found")

    return pg

