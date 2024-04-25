# 베이스 이미지
FROM python:3.9

# 작업 디렉토리 설정
WORKDIR /app/django

# 필요한 파일 복사
COPY . /app/django

# 환경 변수 설정
ENV DATABASE_URL=mysql://chson:8846@localhost:3306/mydatabase

# 필요한 패키지 설치 및 초기 설정
RUN pip install -r requirements.txt
RUN python manage.py migrate

# 포트 설정
EXPOSE 8080

# 실행 명령
CMD ["python", "manage.py", "runserver", "0.0.0.0:8080"]