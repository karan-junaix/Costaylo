from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql://postgres:suresh@localhost:5432/pg_listing"
#DATABASE_URL = "postgresql://neondb_owner:npg_zHd5uMBl8ZrO@ep-crimson-credit-a10cuv6h-pooler.ap-southeast-1.aws.neon.tech/Castalyo?sslmode=require&channel_binding=require"

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()