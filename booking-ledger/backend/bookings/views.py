import logging
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import responses
from rest_framework.exceptions import ValidationError
from .serializers import PropertySerializer, GuestSerializer
from .models import Property, Guest

logger = logging.getLogger(__name__)

class PropertyViewSet(viewsets.ModelViewSet):
    # grab all objects in table
    queryset = Property.objects.select_related('booked_by').all()
    
    # translate to json
    serializer_class = PropertySerializer

    #/api/properties/<id>/book_property/
    @action(detail=True, methods=['post'],url_path="book_property")
    def book_property(self, request, pk=None):
        property = self.get_object()
        logger.warning(f"{property.name}")
     
        if property.is_booked:
            raise ValidationError({
                "error": "Property is already booked"
            })
        
        guest_id = request.data.get('guest_id')
        if not guest_id:
            raise ValidationError({
                "error": "guest_id is required in the payload"
            })
        
        try:
            guest = Guest.objects.get(id=guest_id)
        except:
            raise ValidationError({
                "error": "Guest no found"
            })

        if guest.wallet_balance >= property.nightly_rate:
            guest.wallet_balance -= property.night_rate
            guest.save(update_fields=['wallet_balance'])

            property.is_booked = True
            property.booked_by = guest
            property.save(update_fields=['is_booked','booked_by'])

        else:
            raise ValidationError({
                "error": "Insufficient Funds"
            })
        serializer = self.get_serializer(property)
        return Response(serializer.data,status=status.HTTP_200_OK)

class GuestViewSet(viewsets.ModelViewSet):
        # grab all objects in table
    queryset = Guest.objects.all()
    
    # translate to json
    serializer_class = GuestSerializer