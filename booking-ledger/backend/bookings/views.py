from django.shortcuts import render

class ProductViewSet(views.ViewSet):
    #add the foreign key
    queryset = Property.objects.select_related("booked_by").all()
    serializer = PropertySerializer

    @action(detail=True, methods=['post'], url_path="book_property")
    def book_property(self, request, pk=None):
        # get selected property
        property = self.get_object()

        #check if property is booked
        if property.is_booked:
            return ValidationError({
                "error": "Property is already booked"
            })

        