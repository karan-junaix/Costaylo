from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    GOOGLE_API_KEY: str = ""
    GEOCODER_PROVIDER: str = "nominatim"  # 'nominatim' or 'google'

    class Config:
        env_file = ".env"

settings = Settings()