from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('', 
    # Examples:
    url(r'^$', 'spatula.views.home', name='home'),
    url(r'^search', 'spatula.views.search'),
    url(r'^timeline$', 'spatula.views.timeline'),
    url(r'^timeline2$', 'spatula.views.timeline2'),
    url(r'^step2$', 'spatula.views.step2'),
    url(r'^step3$', 'spatula.views.step3'),
    url(r'^step4$', 'spatula.views.step4'),
    url(r'^step5$', 'spatula.views.step5'),
    url(r'^mozarella$', 'spatula.views.mozarella'),
    url(r'^mozarella2$', 'spatula.views.mozarella2'),
    url(r'^summary$', 'spatula.views.summary'),
    url(r'^summary2$', 'spatula.views.summary2'),
    url(r'^sumtimeline$', 'spatula.views.sumtimeline'),
    url(r'^topbar$', 'spatula.views.topbar')



    # url(r'^spatula/', include('spatula.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
