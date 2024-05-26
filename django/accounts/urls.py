from django.urls import path, include
from . import views
from rest_framework import urls

urlpatterns = [
    path('signup/', views.UserCreate.as_view()),
    path('signin/', views.UserLoginView.as_view()),
]
