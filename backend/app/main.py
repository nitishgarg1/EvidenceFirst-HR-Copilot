from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import router
from app.core.config import get_settings

from app.services.audit import init_db


settings = get_settings()
init_db()


app = FastAPI(title=settings.app_name, version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[o.strip() for o in settings.cors_origins.split(",") if o.strip()],
    allow_methods=["*"],
    allow_headers=["*"],  # includes the X-Admin-Key header used by /ingest
)

app.include_router(router)


@app.get("/health")
def health():
    return {"status": "ok", "app": settings.app_name}