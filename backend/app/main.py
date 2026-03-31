from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import Base, engine
#from app.models import amenity, cities, countries, pg_amenities, pg,pg_image, review, states, users,lead,room_type,user_types,pg_rooms
from app import models
from app.routers import admin, public_pg,lead,review,pg_images,filters,footer
from fastapi.staticfiles import StaticFiles
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
app.include_router(pg_images.router)
app.include_router(filters.router)
app.include_router(footer.router)
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")
logging.basicConfig(level=logging.INFO)
@app.get("/")
def root():
    return {"message": "Backend is working"}