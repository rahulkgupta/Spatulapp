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

def step4(request):
    return render_to_response('step4.html', {},context_instance=RequestContext(request)
)

def step5(request):
    return render_to_response('step5.html', {},context_instance=RequestContext(request)
)

def mozarella(request):
    return render_to_response('mozarella.html', {},context_instance=RequestContext(request)
)

def mozarella2(request):
    return render_to_response('mozarella2.html', {},context_instance=RequestContext(request)
)

def summary(request):
    return render_to_response('summary.html', {},context_instance=RequestContext(request)
)

def summary2(request):
    return render_to_response('summary2.html', {},context_instance=RequestContext(request)
)

def topbar(request):
    return render_to_response('topbar.html', {},context_instance=RequestContext(request)
                              )

def search(request):
    search = request.GET['query']
    return render_to_response('step4.html', {},context_instance=RequestContext(request))


def timeline(request):
    if not 't' in request.session or request.session['t'] == True:
        request.session['t'] = False
        return render_to_response('timeline.html', {},context_instance=RequestContext(request))
    else:
        request.session['t'] = True
        return render_to_response('timeline2.html', {},context_instance=RequestContext(request))
