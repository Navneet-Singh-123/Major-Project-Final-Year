from django.shortcuts import render

# Create your views here.
def index(request):
  print("Requested")
  return render(request, 'frontend/index.html')