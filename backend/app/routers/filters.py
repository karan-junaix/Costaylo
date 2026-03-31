from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.pg import PG
from app.models.amenity import Amenity
from app.models.occupancy import OccupancyType
from app.models.property_type import PropertyType

router = APIRouter(prefix="/filters", tags=["Filters"])


# ✅ Get Amenities
@router.get("/amenities")
def get_amenities(db: Session = Depends(get_db)):
    amenities = db.query(Amenity).all()

    return [
        {
            "id": a.id,
            "name": a.name
        }
        for a in amenities
    ]


# ✅ Get Locations (from PG table)
@router.get("/locations")
def get_locations(db: Session = Depends(get_db)):
    locations = db.query(PG.locality).distinct().all()
    return [loc[0] for loc in locations]

# ✅ OCCUPANCY
@router.get("/occupancy")
def get_occupancy(db: Session = Depends(get_db)):
    return db.query(OccupancyType).all()


# ✅ PROPERTY TYPES
@router.get("/property-types")
def get_property_types(db: Session = Depends(get_db)):
    return db.query(PropertyType).all()