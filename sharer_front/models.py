# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models

class choose_book(models.Model):
    school = models.CharField(max_length=30)
    college = models.CharField(max_length=30)
    major = models.CharField(max_length=30)
    course = models.CharField(max_length=30)
    book_name = models.CharField(max_length=30)
    book_key = models.CharField(max_length=20)

    def __unicode__(self):
        return self.book_name
