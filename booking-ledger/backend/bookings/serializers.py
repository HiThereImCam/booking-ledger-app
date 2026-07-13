from rest_framework import serializers
from .models import Guest, Property

class GuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guest
        fields=['id', 'name', 'wallet_balance']

class PropertySerializer(serializers.ModelSerializer):
    class Meta: 
        model = Property
        fields=['id', 'name', 'nightly_rate', 'is_booked', 'booked_by']