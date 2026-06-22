# Trigger reload to load updated .env variables
from fastapi import FastAPI
from fastapi.middleware.cors import (
    CORSMiddleware,
)

from app.api.routes.location import (
    router as location_router
)
from app.api.routes.prompt import (
    router as prompt_router
)
from app.api.routes.weather import (
    router as weather_router,
)
from app.api.routes.ai import (
    router as ai_router
)
from app.api.routes.ai_weather_test import (
    router as ai_weather_test_router
)
from contextlib import (
    asynccontextmanager
)

from app.database.mongodb import (
    MongoDB
)
from app.api.routes.db_test import (
    router as db_test_router
)
from app.api.routes.cache_test import (
    router as cache_router
)
from app.api.routes.history import (
    router as history_router
)





@asynccontextmanager
async def lifespan(app):

    await MongoDB.connect()

    yield

    await MongoDB.disconnect()


app = FastAPI(
    title="Atmos AI Backend",
    version="1.0.0",
    lifespan=lifespan
)

app.include_router(
    location_router,
    prefix="/api/location",
    tags=["Location"]
)
app.include_router(
    ai_router,
    prefix="/api/ai",
    tags=["AI"]
)
app.include_router(
    ai_weather_test_router,
    prefix="/api/ai",
    tags=["AI"]
)

app.include_router(
    db_test_router,
    prefix="/api/db",
    tags=["Database"]
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(
    prompt_router,
    prefix="/api/prompt",
    tags=["Prompt"]
)
app.include_router(
    weather_router,
    prefix="/api/weather",
    tags=["Weather"],
)
app.include_router(
    cache_router,
    prefix="/api/cache",
    tags=["Cache"]
)
app.include_router(
    history_router,
    prefix="/api/weather",
    tags=["History"]
)

@app.get("/")
async def root():
    return {
        "message":
        "Atmos AI Backend Running"
    }