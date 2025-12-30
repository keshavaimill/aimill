import os
import csv
import logging
import pytz
from datetime import datetime
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from dotenv import load_dotenv

# Initialize
load_dotenv()
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("AI_Mill_System")

app = FastAPI(title="AI Mill Central API")

# CORS - Ready for your Frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- DATABASE CONFIGURATION ---
CONTACT_CSV = 'customer_database.csv'
DEMO_CSV = 'demo_schedules.csv'

# Column Headers
CONTACT_COLS = ["Timestamp_IST", "Name", "Email", "Company", "Problem", "Message"]
DEMO_COLS = ["Log_IST", "Name", "Email", "Company", "Date", "Preferred_Time", "Time_Zone", "Duration"]

@app.on_event("startup")
async def init_databases():
    """Ensures CSV files exist with correct headers on startup."""
    for file, cols in [(CONTACT_CSV, CONTACT_COLS), (DEMO_CSV, DEMO_COLS)]:
        if not os.path.isfile(file):
            with open(file, mode='w', newline='', encoding='utf-8') as f:
                writer = csv.DictWriter(f, fieldnames=cols)
                writer.writeheader()
            logger.info(f"🚀 AI Mill Database Initialized: {file}")

# --- DATA MODELS ---

# For the 'Get in Touch' Form (from your UI image)
class ContactRequest(BaseModel):
    name: str = Field(..., min_length=1)
    email: EmailStr
    company: str = "N/A"
    problem_solving: str
    message: str

# For the 'Schedule a Demo' Form
class DemoBooking(BaseModel):
    name: str = Field(..., min_length=1)
    email: EmailStr
    company: str = "N/A"
    date: str          # Example: "2026-01-20"
    preferred_time: str # Example: "Part-time / 10:30 AM"
    time_zone: str     # Example: "IST (UTC+5:30)"
    duration: str = "30 mins"

# --- EMAIL HELPER ---
def send_ai_mill_notification(subject, html_content):
    try:
        api_key = os.getenv("SENDGRID_API_KEY")
        sender = os.getenv("MAIL_USERNAME")
        recipients = os.getenv("ALERT_EMAILS", "").split(",")
        
        sg = SendGridAPIClient(api_key)
        message = Mail(
            from_email=sender,
            to_emails=recipients,
            subject=subject,
            html_content=html_content
        )
        sg.send(message)
    except Exception as e:
        logger.error(f"AI Mill Mailer Error: {e}")

# --- ENDPOINTS ---

@app.post("/api/send-message")
async def handle_contact(req: ContactRequest):
    ist = pytz.timezone('Asia/Kolkata')
    ts = datetime.now(ist).strftime('%Y-%m-%d %I:%M %p')
    
    # Save to Contact CSV
    row = {
        "Timestamp_IST": ts, "Name": req.name, "Email": req.email, 
        "Company": req.company, "Problem": req.problem_solving, "Message": req.message
    }
    with open(CONTACT_CSV, mode='a', newline='', encoding='utf-8') as f:
        csv.DictWriter(f, fieldnames=CONTACT_COLS).writerow(row)
    
    # Branded Email
    email_html = f"""
    <div style="font-family: Arial, sans-serif; border: 1px solid #1a1a1a; padding: 20px; border-radius: 10px;">
        <h2 style="background: #1a1a1a; color: #ffffff; padding: 10px; text-align: center;">AI Mill: New Inquiry</h2>
        <p><b>Client:</b> {req.name}</p>
        <p><b>Company:</b> {req.company}</p>
        <p><b>Interest:</b> {req.problem_solving}</p>
        <p><b>Message:</b> {req.message}</p>
    </div>
    """
    send_ai_mill_notification(f"AI Mill Lead: {req.name}", email_html)
    return {"status": "success", "message": "Inquiry recorded in AI Mill Database"}

@app.post("/api/schedule-demo")
async def handle_demo(req: DemoBooking):
    ist = pytz.timezone('Asia/Kolkata')
    log_ts = datetime.now(ist).strftime('%Y-%m-%d %I:%M %p')
    
    # Save to Demo CSV
    row = {
        "Log_IST": log_ts, "Name": req.name, "Email": req.email, "Company": req.company,
        "Date": req.date, "Preferred_Time": req.preferred_time, "Time_Zone": req.time_zone, "Duration": req.duration
    }
    with open(DEMO_CSV, mode='a', newline='', encoding='utf-8') as f:
        csv.DictWriter(f, fieldnames=DEMO_COLS).writerow(row)
    
    # Branded Email
    email_html = f"""
    <div style="font-family: Arial, sans-serif; border: 2px solid #1a1a1a; padding: 20px; border-radius: 10px;">
        <h2 style="background: #1a1a1a; color: #00d4ff; padding: 10px; text-align: center;">AI Mill: Demo Scheduled</h2>
        <p><b>Client:</b> {req.name} ({req.company})</p>
        <p><b>Date:</b> {req.date}</p>
        <p><b>Time:</b> {req.preferred_time} ({req.time_zone})</p>
        <p><b>Duration:</b> {req.duration}</p>
        <div style="text-align: center; margin-top: 20px;">
            <a href="mailto:{req.email}" style="padding: 10px 20px; background: #1a1a1a; color: white; text-decoration: none; border-radius: 5px;">Reply & Confirm</a>
        </div>
    </div>
    """
    send_ai_mill_notification(f"AI Mill Demo Request: {req.name}", email_html)
    return {"status": "success", "message": "Demo recorded in AI Mill Schedule"}

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)