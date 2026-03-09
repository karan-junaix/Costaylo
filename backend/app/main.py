from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import Base, engine
from app.models import pg, lead, pg_image, room_type, amenity,review
from app.routers import admin, public_pg,lead,review
import logging
app = FastAPI()
app.add_middleware(
    CORSMiddleware, # pyright: ignore[reportUndefinedVariable]
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#Base.metadata.create_all(bind=engine)
Base.metadata.create_all(bind=engine)

app.include_router(admin.router)
app.include_router(public_pg.router)
app.include_router(lead.router)
app.include_router(review.router)

logging.basicConfig(level=logging.INFO)
@app.get("/")
def root():
    return {"message": "Backend is working"}