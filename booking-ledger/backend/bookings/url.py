from django.urls import path,include
from .views import PropertyListApiView,PropertyIdApiView, GuestListApiView, GuestIdApiView

urlpatterns = [
    # get a list of properties/guests
    path('api/properties/',PropertyListApiView.as_view(),name="list-properties"),
    path('api/guests/', GuestListApiView.as_view(), name="list-guests"),

    # you wouldnt neceessarily need a guest list so if you want individual
    path('api/properties/<int:pk>', PropertyIdApiView.as_view(), name="property"),
    path('api/guests/<int:pk>', GuestIdApiView.as_view(), name="guest")
]   
