from django.conf.urls import url,include

import views
urlpatterns = [
    url(r'choose_book$', views.choose_book_data,),
    url(r'choose_school_college$', views.choose_school_college_data,),
]
