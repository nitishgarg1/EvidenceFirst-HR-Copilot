from pydantic_settings import BaseSettings, SettingsConfigDict
from pathlib import Path
BASE_DIR = Path(__file__).resolve().parents[2]
from functools import lru_cache

class Settings(BaseSettings):
    app_name: str = "Enterprise HR Copilot"
    app_env: str = "development"
    gemini_api_key: str = ""
    tavily_api_key: str = ""
    embedding_model: str = ""
    gemini_model: str =""
    top_k: int = 4
    max_retries: int = 3
    admin_api_key: str = "change-me-in-production"
    audit_db_path: str = str(BASE_DIR / "data" / "audit.db")
    upload_dir: str = str(BASE_DIR / "uploads")
    sample_kb_dir: str = str(BASE_DIR / "data" / "sample_kb")
    model_config = SettingsConfigDict(env_file=str(BASE_DIR / ".env"),extra="ignore")


@lru_cache
def get_settings():
    return Settings()