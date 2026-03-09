from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.models.review import Review
from app.schemas.review import ReviewCreate, ReviewResponse
from app.database import get_db
from typing import List


router = APIRouter(prefix="/reviews", tags=["Reviews"])

@router.get("/{pg_id}", response_model=List[ReviewResponse])
def get_reviews(pg_id: int, db: Session = Depends(get_db)):
    return db.query(Review).filter(Review.pg_id == pg_id).order_by(Review.created_at.desc()).all()


@router.post("/", response_model=ReviewResponse)
def create_review(review: ReviewCreate, db: Session = Depends(get_db)):
    #new_review = Review(**review.dict())
    new_review = Review(**review.model_dump())
    db.add(new_review)
    db.commit()
    db.refresh(new_review)
    return new_review