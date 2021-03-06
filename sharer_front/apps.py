# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.apps import AppConfig
from suit.apps import DjangoSuitConfig
from suit.menu import ParentItem, ChildItem

class SharerFrontConfig(AppConfig):
    name = 'sharer_front'

class SuitConfig(DjangoSuitConfig):
    layout = 'horizontal'
    menu = (
        ParentItem('Content', children=[
            ChildItem(model='demo.country'),
            ChildItem(model='demo.continent'),
            ChildItem(model='demo.showcase'),
            ChildItem('Custom view', url='/admin/custom/'),
        ], icon='fa fa-leaf'),
        ParentItem('Integrations', children=[
            ChildItem(model='demo.city'),
        ]),
        ParentItem('Users', children=[
            ChildItem(model='auth.user'),
            ChildItem('User groups', 'auth.group'),
        ], icon='fa fa-users'),
        ParentItem('Right Side Menu', children=[
            ChildItem('Password change', url='admin:password_change'),
            ChildItem('Open Google', url='http://google.com', target_blank=True),

        ], align_right=True, icon='fa fa-cog'),
    )
