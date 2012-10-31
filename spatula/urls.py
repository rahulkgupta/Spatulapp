from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('', 
    # Examples:
    url(r'^$', 'spatula.views.home', name='home'),
    url(r'^search/(?P<food>\w+)$', 'spatula.views.search'),
    url(r'^timeline$', 'spatula.views.timeline'),
    url(r'^step2$', 'spatula.views.step2'),
    url(r'^step3$', 'spatula.views.step3')

    # url(r'^spatula/', include('spatula.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
