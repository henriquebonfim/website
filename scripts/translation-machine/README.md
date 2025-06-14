```sh
docker compose up -d
python3 -m venv .venv
poetry env use ./.venv/bin/python3
poetry install
poetry run translate
poetry run pytest
```
