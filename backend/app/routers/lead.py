from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.lead import Lead
from app.schemas.lead import LeadCreate, LeadResponse
from app.models.pg import PG
from app.utils.email import send_email, ADMIN_EMAIL
import logging

router = APIRouter()
logger = logging.getLogger("app.lead")


@router.post("/leads", response_model=LeadResponse, status_code=201)
def create_lead(lead: LeadCreate, db: Session = Depends(get_db)):

    # Basic phone validation: require at least 7 digits
    phone_digits = ''.join(filter(str.isdigit, lead.phone))
    if len(phone_digits) < 7:
        raise HTTPException(status_code=400, detail="Phone number is too short")

    
   # If a pg_id is provided, make sure it exists to avoid FK violation
    pg_obj = None
    if lead.pg_id is not None:
        pg_obj = db.query(PG).filter(PG.id == lead.pg_id).first()
        if not pg_obj:
            raise HTTPException(status_code=404, detail=f"PG with id={lead.pg_id} not found")

    new_lead = Lead(
        name=lead.name,
        phone=lead.phone,
        email=lead.email,
        move_in_date=lead.move_in_date,
        pg_id=lead.pg_id,
    )

    db.add(new_lead)
    db.commit()
    db.refresh(new_lead)

    logger.info("Created lead id=%s pg_id=%s name=%s", new_lead.id, new_lead.pg_id, new_lead.name)
    
    
    # =========================
    # SEND EMAILS
    # =========================

    pg_name = pg_obj.title if pg_obj else "PG Property"

    # Email to ADMIN
    admin_body = f"""
New PG enquiry received

Name: {new_lead.name}
Phone: {new_lead.phone}
Email: {new_lead.email}
Move-in Date: {new_lead.move_in_date}

Property: {pg_name}
"""

    send_email(
        to_email=ADMIN_EMAIL,
        subject="New PG Enquiry",
        body=admin_body
    )

    # Email to USER
    if new_lead.email:
        user_body = f"""
Hi {new_lead.name},

Thank you for your interest in {pg_name}.

Our team will contact you shortly.

Property: {pg_name}

Regards,
PG Support Team
"""

        send_email(
            to_email=new_lead.email,
            subject="Thanks for your enquiry",
            body=user_body
        )

    return new_lead
    


@router.get("/leads")
def list_leads(db: Session = Depends(get_db)):
    leads = db.query(Lead).order_by(Lead.created_at.desc()).all()
    result = []
    for l in leads:
        result.append({
            "id": l.id,
            "name": l.name,
            "phone": l.phone,
            "email": l.email,
            "move_in_date": l.move_in_date.isoformat() if l.move_in_date else None,
            "pg_id": l.pg_id,
            "created_at": l.created_at.isoformat() if l.created_at else None,
        })
    return result


@router.get("/leads/{lead_id}")
def get_lead(lead_id: int, db: Session = Depends(get_db)):
    lead = db.query(Lead).filter(Lead.id == lead_id).first()
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")
    return {
        "id": lead.id,
        "name": lead.name,
        "phone": lead.phone,
        "email": lead.email,
        "move_in_date": lead.move_in_date.isoformat() if lead.move_in_date else None,
        "pg_id": lead.pg_id,
        "created_at": lead.created_at.isoformat() if lead.created_at else None,
    }