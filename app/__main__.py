from app import config


def main() -> None:
    import uvicorn

    # Run ASGI Server
    uvicorn.run(
        "app.web.app:build_app",
        factory=True,
        host=config.app.host,
        port=config.app.port,
        reload=config.debug,  # Hot reload in debug mode
    )


if __name__ == "__main__":
    main()
