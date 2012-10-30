# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.template import RequestContext
def home(request):
    return render_to_response('index.html', {},context_instance=RequestContext(request)
)

def search(request, food):
    return HttpResponse("Search results " + food)


def timeline(request):
    return HttpResponse("timeline location")