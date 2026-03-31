from fastapi import APIRouter, UploadFile, File, Depends
from sqlalchemy.orm import Session
import shutil
import os
from app.database import get_db
from app.models.pg_image import PGImage

router = APIRouter(prefix="/pg-images", tags=["PG Images"])

UPLOAD_FOLDER = "uploads"

@router.post("/{pg_id}")
def upload_pg_image(pg_id: int, file: UploadFile = File(...), db: Session = Depends(get_db)):

    file_location = f"{UPLOAD_FOLDER}/{file.filename}"

    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    image = PGImage(
        pg_id=pg_id,
        image_url=file_location
    )

    db.add(image)
    db.commit()

    return {"image_url": file_location}

@router.get("/{pg_id}")
def get_pg_images(pg_id: int, db: Session = Depends(get_db)):

    images = db.query(PGImage).filter(PGImage.pg_id == pg_id).all()

    return images