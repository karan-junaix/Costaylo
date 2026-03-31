import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

load_dotenv()

SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587

EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")  # MUST be app password

ADMIN_EMAIL = os.getenv("ADMIN_EMAIL")


def send_email(to_email: str, subject: str, body: str):
    try:
        if not EMAIL_ADDRESS or not EMAIL_PASSWORD:
            raise ValueError("Email config missing")

        if not to_email:
            raise ValueError("Recipient email is None")

        subject = subject or "No Subject"
        body = body or ""

        msg = MIMEMultipart()
        msg["From"] = EMAIL_ADDRESS
        msg["To"] = to_email
        msg["Subject"] = subject

        msg.attach(MIMEText(body, "plain"))

        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        server.send_message(msg)
        server.quit()

        print("✅ Email sent successfully")

    except Exception as e:
        print("❌ Email failed:", e)