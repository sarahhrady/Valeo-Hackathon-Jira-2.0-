# app_name/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'employees', views.EmployeeViewSet)
router.register(r'teams', views.TeamViewSet)
router.register(r'tickets', views.TicketViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # Additional app-specific URLs can be defined here
]
