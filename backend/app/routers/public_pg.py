from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session, joinedload
from app.database import get_db
from app.models.pg import PG
from app.models.pg_rooms import PGRoom
from app.models.pg_amenities import PGAmenity
from app.models.pg_image import PGImage
from app.models.amenity import Amenity
from app.models.occupancy import OccupancyType
from app.models.property_type import PropertyType
from app.schemas.pg_schema import PGResponse
from sqlalchemy import func

import math

router = APIRouter(prefix="/pgs", tags=["Public PGs"])


# -------------------------------
# 📍 HAVERSINE FUNCTION
# -------------------------------
def haversine(lat1, lon1, lat2, lon2):
    R = 6371

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


# -------------------------------
# 📍 NEARBY PGs
# -------------------------------
@router.get("/nearby", response_model=list[PGResponse])
def get_nearby_pgs(lat: float, lng: float, db: Session = Depends(get_db)):
    all_pgs = db.query(PG).all()

    nearby = []

    for pg in all_pgs:
        if pg.latitude and pg.longitude:
            distance = haversine(lat, lng, pg.latitude, pg.longitude)

            if distance <= 5:
                nearby.append(pg)

    return nearby


# -------------------------------
# 📍 LOCALITY COUNTS (NEW API)
# -------------------------------
@router.get("/locality-counts")
def get_locality_counts(db: Session = Depends(get_db)):
    results = (
        db.query(
            func.lower(func.replace(PG.locality, " ", "-")).label("slug"),
            func.count(PG.id).label("count")
        )
        .group_by(PG.locality)
        .all()
    )

    return [
        {
            "slug": r.slug,
            "count": r.count
        }
        for r in results
    ]

# -------------------------------
# 📍 FILTER PGs (MAIN API)
# -------------------------------
@router.get("/")
def get_all_pgs(
    locations: list[str] = Query(default=None),
    amenities: list[str] = Query(default=None),
    gender: list[str] = Query(default=None),

    occupancy: list[int] = Query(default=None),
    property_type: list[int] = Query(default=None),

    min_budget: float = 3000,
    max_budget: float = 25000,

    page: int = 1,          # ✅ NEW
    limit: int = 10,        # ✅ NEW


    db: Session = Depends(get_db)
):

    query = db.query(PG).options(
        joinedload(PG.pg_amenities).joinedload(PGAmenity.amenity),
        joinedload(PG.occupancy),
        joinedload(PG.property_type)
    )

    # 🔹 Location Filter
    if locations:
        query = query.filter(PG.locality.in_(locations))

    # 🔹 Budget Filter
    query = query.filter(PG.starting_price.between(min_budget, max_budget))

    # 🔹 Gender Filter
    if gender:
        query = query.filter(PG.gender.in_(gender))

    # 🔹 Occupancy Filter (ID BASED)
    if occupancy:
        query = query.filter(PG.occupancy_id.in_(occupancy))

    # 🔹 Property Type Filter (ID BASED)
    if property_type:
        query = query.filter(PG.property_type_id.in_(property_type))

    # 🔹 Amenities Filter
    if amenities:
        query = (
            query.join(PG.pg_amenities)
                 .join(PGAmenity.amenity)
                 .filter(Amenity.name.in_(amenities))
                 .group_by(PG.id)
        )

    #pgs = query.all()
    total = query.count()

    offset = (page - 1) * limit
 
    pgs = query.offset(offset).limit(limit).all()

    # 🔹 RESPONSE FORMAT
    result = []

    for pg in pgs:
      images = db.query(PGImage).filter(PGImage.pg_id == pg.id).all()

      image_list = []
      for img in images:
        image_list.append({
            "image_url": img.image_url
        })
      result.append({
        "id": pg.id,
        "title": pg.title,
        "description": pg.description,
        "locality": pg.locality,
        "gender": pg.gender,
        "starting_price": pg.starting_price,
        "is_available": pg.is_available,
        "latitude": pg.latitude,
        "longitude": pg.longitude,
        "whatsapp_number": pg.whatsapp_number, 
        "occupancy": pg.occupancy.name if pg.occupancy else None,
        "property_type": pg.property_type.name if pg.property_type else None,
        "images": image_list 
    }) 

    #return result
    return {
    "total": total,
    "page": page,
    "limit": limit,
    "data": result
  }

# -------------------------------
# ⭐ FEATURED PGs
# -------------------------------
@router.get("/featured")
def get_featured_pgs(db: Session = Depends(get_db)):

    query = (
        db.query(PG)
        .options(
            joinedload(PG.pg_amenities).joinedload(PGAmenity.amenity),
            joinedload(PG.occupancy),
            joinedload(PG.property_type)
        )
        .filter(PG.is_featured == True)
        .order_by(PG.id.desc())
        .limit(8)
    )

    pgs = query.all()

    result = []

    for pg in pgs:
        # 🔹 IMAGES
        images = db.query(PGImage).filter(PGImage.pg_id == pg.id).all()
        image_list = [{"image_url": img.image_url} for img in images]

        # 🔹 AMENITIES
        amenities = []
        for pa in pg.pg_amenities:
            amenities.append(pa.amenity.name)

        result.append({
            "id": pg.id,
            "title": pg.title,
            "locality": pg.locality,
            "description": pg.description,
            "starting_price": pg.starting_price,
            "gender": pg.gender,
            "whatsapp_number": pg.whatsapp_number,
            "occupancy": pg.occupancy.name if pg.occupancy else None,
            "property_type": pg.property_type.name if pg.property_type else None,
            "images": image_list,
            "amenities": amenities
        })

    return result

# -------------------------------
# 📍 SINGLE PG DETAILS
# -------------------------------
@router.get("/{pg_id}")
def get_pg_by_id(pg_id: int, db: Session = Depends(get_db)):

    pg = (
        db.query(PG)
        .options(
            joinedload(PG.rooms).joinedload(PGRoom.room_type),
            joinedload(PG.pg_amenities).joinedload(PGAmenity.amenity),
            joinedload(PG.occupancy),
            joinedload(PG.property_type)
        )
        .filter(PG.id == pg_id)
        .first()
    )

    if not pg:
        raise HTTPException(status_code=404, detail="PG not found")

    # 🔹 ROOM TYPES
    room_types = []
    for room in pg.rooms:
        room_types.append({
            "type": room.room_type.type_name,
            "price": float(room.price),
            "available": room.available_rooms > 0,
            "inclusions": ["WiFi", "Food", "Laundry"]
        })

    # 🔹 AMENITIES
    amenities = []
    for pa in pg.pg_amenities:
        amenities.append({
            "name": pa.amenity.name,
            "icon": pa.amenity.icon,
            "available": True
        })

    # 🔹 IMAGES
    images = db.query(PGImage).filter(PGImage.pg_id == pg_id).all()

    image_list = []
    for img in images:
        image_list.append({
            "image_url": img.image_url
        })

    return {
        "id": pg.id,
        "title": pg.title,
        "description": pg.description,
        "locality": pg.locality,
        "gender": pg.gender,
        "starting_price": pg.starting_price,
        "is_available": pg.is_available,
        "latitude": pg.latitude,
        "longitude": pg.longitude,

        "occupancy": pg.occupancy.name if pg.occupancy else None,
        "property_type": pg.property_type.name if pg.property_type else None,

        "room_types": room_types,
        "amenities": amenities,
        "images": image_list
    }