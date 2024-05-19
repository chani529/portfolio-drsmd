from django.urls import path, include
from .views import UserLoginAPIView

urlpatterns = [
    path("", UserLoginAPIView.as_view()),
]
