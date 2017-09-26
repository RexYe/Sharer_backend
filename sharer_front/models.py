# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models

import hashlib

class choose_school_college(models.Model):
    school = models.CharField(max_length=30)
    college = models.CharField(max_length=30)
    major = models.CharField(max_length=30)
    major_key = models.CharField(max_length=30)
    def __unicode__(self):
        return self.school

class choose_book_type(models.Model):
    school = models.CharField(max_length=30)
    college = models.CharField(max_length=30)
    major = models.CharField(max_length=30)
    major_key = models.CharField(max_length=30)
    course = models.CharField(max_length=30)
    book_name = models.CharField(max_length=30)
    book_key = models.CharField(max_length=20)
    def __unicode__(self):
        return self.book_name

class seller_book(models.Model):
    seller_name = models.CharField(max_length=40)
    price = models.IntegerField()
    img_src1 = models.CharField(max_length=300)
    img_src2 = models.CharField(max_length=300)
    img_src3 = models.CharField(max_length=300)
    img_src4 = models.CharField(max_length=300)
    seller_description = models.CharField(max_length=160)
    book_name = models.CharField(max_length=40)
    book_author = models.CharField(max_length=30)
    contactway = models.CharField(max_length=60)
    def __unicode__(self):
        return self.contactway

class load_book_by_choose_major(models.Model):
    school = models.CharField(max_length=30)
    college = models.CharField(max_length=30)
    major = models.CharField(max_length=30)
    major_key = models.CharField(max_length=30)
    book_img = models.CharField(max_length=500)
    book_name = models.CharField(max_length=30)
    book_key = models.CharField(max_length=20)
    def __unicode__(self):
        return self.book_name

class book_detail(models.Model):
    school_key = models.CharField(max_length=30)
    college_key = models.CharField(max_length=30)
    major_key = models.CharField(max_length=30)
    book_img = models.CharField(max_length=500)
    book_name = models.CharField(max_length=30)
    book_key = models.CharField(max_length=20)
    author = models.CharField(max_length=30)
    original_price = models.CharField(max_length=30)
    publish_house = models.CharField(max_length=50)
    def __unicode__(self):
        return self.book_name

class book_detail_new(models.Model):
    school = models.CharField(max_length=30)
    major_key = models.CharField(max_length=30)
    book_img = models.CharField(max_length=500)
    book_name = models.CharField(max_length=30)
    book_key = models.CharField(max_length=20)
    author = models.CharField(max_length=30)
    original_price = models.CharField(max_length=30)
    publish_house = models.CharField(max_length=50)
    def __unicode__(self):
        return self.book_name
class user(models.Model):
    account = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    name = models.CharField(max_length=30)
    telphone = models.CharField(max_length=11)
    book_key = models.CharField(max_length=20)
    def __unicode__(self):
        return self.account
class profile(models.Model):
    user_account = models.CharField(max_length=20)
    head_img = models.CharField(max_length=500)
    wechat = models.CharField(max_length=30)
    QQ = models.CharField(max_length=13)
    school = models.CharField(max_length=20)
    school_key = models.CharField(max_length=20)
    college = models.CharField(max_length=30)
    college_key = models.CharField(max_length=20)
    major = models.CharField(max_length=20)
    major_key = models.CharField(max_length=20)
    def __unicode__(self):
        return self.user_account

class Accounts(models.Model):
    telphone = models.CharField(max_length=11)
    password = models.CharField(max_length=256)
    nickname = models.CharField(max_length=16)
    def __unicode__(self):
        return self.telphone
    def save(self,*args,**kwargs):
        self.password = hashlib.sha1(self.password+self.telphone).hexdigest()
        super(Accounts,self).save(*args,**kwargs)
