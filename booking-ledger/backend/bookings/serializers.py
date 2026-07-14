from rest_framework import serializers
from .models import Guest, Property

class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = ['id', 'name', 'nightly_rate', 'is_booked', 'booked_by']
    

class GuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guest
        fields = ['id', 'name', 'wallet_balance']