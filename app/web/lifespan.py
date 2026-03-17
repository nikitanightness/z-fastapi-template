from contextlib import asynccontextmanager
from typing import Any, AsyncGenerator

from fastapi import FastAPI


@asynccontextmanager
async def app_lifespan(app: FastAPI) -> AsyncGenerator[None, Any]:
    # Startup Actions
    # ...

    yield

    # Shutdown Actions
    # ...
