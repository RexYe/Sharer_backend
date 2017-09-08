from django.conf.urls import url,include

import views
urlpatterns = [
    url(r'choose_book$', views.choose_book_data,),
]
