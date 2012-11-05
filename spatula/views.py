# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.template import RequestContext


def home(request):
    return render_to_response('index.html', {},context_instance=RequestContext(request)
)

def step2(request):
    return render_to_response('step2.html', {},context_instance=RequestContext(request)
)

def step3(request):
    return render_to_response('step3.html', {},context_instance=RequestContext(request)
)

def summary(request):
    return render_to_response('summary.html', {},context_instance=RequestContext(request)
)

def search(request):
    search = request.GET['query']
    return HttpResponse("Search results " + search)


def timeline(request):
    return render_to_response('timeline.html', {},context_instance=RequestContext(request)
)