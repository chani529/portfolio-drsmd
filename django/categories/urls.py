from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.ListAPIView.as_view())
]
