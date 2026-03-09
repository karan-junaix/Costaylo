from app.models.pg import PG

def create_pg_db(db, pg_data, latitude, longitude):

    new_pg = PG(
        title=pg_data.title,
        description=pg_data.description,
        locality=pg_data.locality,
        gender=pg_data.gender,
        whatsapp_number=pg_data.whatsapp_number,
        starting_price=pg_data.starting_price,
        latitude=latitude,
        longitude=longitude
    )

    db.add(new_pg)
    db.commit()
    db.refresh(new_pg)

    return new_pg