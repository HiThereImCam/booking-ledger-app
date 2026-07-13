from django.urls import path,include
from rest_framework import DefaultRouter
from .views import PropertyViewSet, GuestViewSet

router = DefaultRouter()
router.register(r'properties', PropertyViewSet, basename='properties')
router.register(r'guests', GuestViewSet, basename='guests')

urlPatterns = [
    path("/", include(router.urls))
]