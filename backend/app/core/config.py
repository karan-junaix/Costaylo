from pydantic_settings import BaseSettings,SettingsConfigDict
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


class Settings(BaseSettings):
    GOOGLE_API_KEY: str = ""
    GEOCODER_PROVIDER: str = "nominatim"  # 'nominatim' or 'google'
    email_address: str
    email_password: str
    admin_email: str
    model_config = SettingsConfigDict(
        env_file=os.path.join(BASE_DIR, ".env")
    )
    '''class Config:
        env_file = ".env"'''

settings = Settings()