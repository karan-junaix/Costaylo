from app.services.geocode_service import get_coordinates
from app.repositories.pg_repository import create_pg_db
from sqlalchemy.orm import Session

def create_pg(db: Session, pg_data):

    lat, lng = get_coordinates(pg_data.locality)
   
    return create_pg_db(
        db=db,
        pg_data=pg_data,
        latitude=lat,
        longitude=lng
    )