FROM python:3.7

run pip install Flask gunicorn pyrebase4 firebase_admin

COPY src/ app/
WORKDIR /app

ENV PORT 8088

CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 app:app