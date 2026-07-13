from django.db import models

# Create your models here.
class Guest(models.Models):
    name = models.CharField(max_length=15)
    wallet_balance = models.DecimalField(max_digits=15, decimal_places=2)

class Property(models.Models):
    name = models.CharField(max_length=50)
    nightly_rate = models.DecimalField(max_digits=15, decimal_places=2)
    is_booked = models.BooleanField(default=False)
    booked_by = models.ForeignKey(Guest, on_delete=models.SET_NULL, null=True, blank=True)