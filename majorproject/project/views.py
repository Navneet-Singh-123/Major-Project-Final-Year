from django.http import JsonResponse
from .models import Stock 
from .serializers import StockSerializer

# Create your views here.
def retrieve_tweets(request):
    return JsonResponse("Fetching tweet using snscrape and store in a file", safe=False)