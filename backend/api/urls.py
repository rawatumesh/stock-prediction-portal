from django.urls import path
from rest_framework.routers import DefaultRouter

from accounts import views as UserView


urlpatterns = [
    path('register/', UserView.RegisterView.as_view()),
]
