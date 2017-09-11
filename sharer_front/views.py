# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from django.core import serializers
from models import choose_book_type,choose_school_college
from django.views.decorators.csrf import csrf_protect,csrf_exempt
from django.http import HttpResponse
import hashlib
import json
import urllib
import sys
reload(sys)
sys.setdefaultencoding("utf-8")

@require_http_methods(["GET"])
def choose_book_data(request):
    response = {}
    try:
        choose_book_json = choose_book_type.objects.filter().order_by('id')
        tempList  = json.loads(serializers.serialize("json", choose_book_json))
        tempList2 = []

        # 处理返回的数据
        for i in tempList:
            tempList2.append({
                'school':i['fields']['school'],
                'college':i['fields']['college'],
                'major':i['fields']['major'],
                'course':i['fields']['course'],
                'book_name':i['fields']['book_name'],
                'book_key':i['fields']['book_key'],
            })
        total = len(tempList2)
        data = {
            'list':tempList2,
            'total':total
        }
        response['data'] = data
        response['msg'] = 'success'
        response['success'] = True
        response['error_num'] = 0
    except  Exception,e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)


@require_http_methods(["GET"])
def choose_school_college_data(request):
    response = {}
    try:
        choose_school_college_json = choose_school_college.objects.filter().order_by('id')
        tempList  = json.loads(serializers.serialize("json", choose_school_college_json))
        tempList2 = []

        # 处理返回的数据
        for i in tempList:
            tempList2.append({
                'school':i['fields']['school'],
                'college':i['fields']['college'],
                'major':i['fields']['major'],
                'major_key':i['fields']['major_key'],
            })
        total = len(tempList2)
        data = {
            'list':tempList2,
            'total':total,
        }
        response['data'] = data
        response['msg'] = 'success'
        response['success'] = True
        response['error_num'] = 0
    except  Exception,e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)
