# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-12 06:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sharer_front', '0002_load_book_by_choose_major'),
    ]

    operations = [
        migrations.CreateModel(
            name='book_detail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('school_key', models.CharField(max_length=30)),
                ('college_key', models.CharField(max_length=30)),
                ('major_key', models.CharField(max_length=30)),
                ('book_img', models.CharField(max_length=500)),
                ('book_name', models.CharField(max_length=30)),
                ('book_key', models.CharField(max_length=20)),
                ('author', models.CharField(max_length=30)),
                ('original_price', models.CharField(max_length=30)),
                ('publish_house', models.CharField(max_length=50)),
            ],
        ),
    ]
