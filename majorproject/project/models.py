from django.db import models

# Create your models here.
class Stock(models.Model):
    stockname = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.stockname + ' ' + str(self.start_date) + ' ' + str(self.end_date)