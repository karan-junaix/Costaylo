

import requests
from app.core.config import settings


def get_coordinates(address: str):
    provider = getattr(settings, "GEOCODER_PROVIDER", "nominatim").lower()
    if provider == "google":
        url = "https://maps.googleapis.com/maps/api/geocode/json"
        params = {
            "address": f"{address}, Chennai, Tamil Nadu, India",
            "key": settings.GOOGLE_API_KEY
        }
        response = requests.get(url, params=params)
        try:
            data = response.json()
        except Exception as e:
            print("Google API response not JSON:", response.status_code, response.text)
            return None, None
        print("FULL GOOGLE RESPONSE:", data)
        if data.get("status") == "OK":
            location = data["results"][0]["geometry"]["location"]
            return location["lat"], location["lng"]
        print(f"Google geocoding failed for address: {address}. Response: {data}")
        return None, None
    else:
        url = "https://nominatim.openstreetmap.org/search"
        params = {
            "q": f"{address}, Chennai, Tamil Nadu, India",
            "format": "json",
            "limit": 1
        }
        headers = {
            "User-Agent": "CostayloApp/1.0 (suresh80553@gmail.com)"
        }
        response = requests.get(url, params=params, headers=headers)
        if response.status_code != 200:
            print(f"Nominatim error: {response.status_code} {response.text}")
            return None, None
        try:
            data = response.json()
        except Exception as e:
            print("Nominatim response not JSON:", response.status_code, response.text)
            return None, None
        print("FULL NOMINATIM RESPONSE:", data)
        if data:
            lat = data[0]["lat"]
            lon = data[0]["lon"]
            return float(lat), float(lon)
        print(f"Nominatim geocoding failed for address: {address}. Response: {data}")
        return None, None