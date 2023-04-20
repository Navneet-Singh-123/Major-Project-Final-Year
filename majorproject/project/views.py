from django.http import JsonResponse
from .models import Stock 
from .serializers import StockSerializer

#################################

def retrieve_tweets(request):
    return JsonResponse("Fetching tweet using snscrape and store in a file", safe=False)

def fetch_raw_tweets(request):
    return JsonResponse("Fetching raw tweets", safe=False)

def get_stocks_detals(request):
    return JsonResponse("Getting stock details", safe=False)

def fetching_tweet_content(request):
    return JsonResponse("Fetching content of the tweets", safe=False)

def process_tweets(request):
    return JsonResponse("Tweets and stocks of each day", safe=False)

def sentiment_analysis(request):
    return JsonResponse("Analysing sentiments", safe=False)

################################

def stock_prediction_using_stock_data(request):
    return JsonResponse("Predicting stock using stock data", safe=False)

def stock_prediction_using_twitter_sentiments(request):
    return JsonResponse("Predicting stock using twitter sentiments", safe=False)

def stock_prediction_using_stock_data_and_twitter_sentiments(request):
    return JsonResponse("Predicting stock using stock data nd twitter sentiments", safe=False)

def plot_results(request):
    return JsonResponse("Plotting testing results", safe=False)

