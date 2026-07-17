from django.shortcuts import render
from rest_framework import APIView
from .models import Property, Guest
from .serializers import PropertySerializer, GuestSerializer

# Create your views here.
class PropertyListApiView(APIView):

    serializer = PropertySerializer
    
    def get(self,request):
        queryset = Property.object.select_related("booked_by").all()
        

