
from django.conf.urls import url,include
from django.contrib import admin
admin.autodiscover()
from django.views.generic import TemplateView
import sharer_front.urls

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(sharer_front.urls)),
    url(r'^$',TemplateView.as_view(template_name="index.html")),
]
