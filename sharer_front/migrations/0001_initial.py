# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-07 10:14
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='choose_book',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('school', models.CharField(max_length=30)),
                ('college', models.CharField(max_length=30)),
                ('major', models.CharField(max_length=30)),
                ('course', models.CharField(max_length=30)),
                ('book_name', models.CharField(max_length=30)),
                ('book_key', models.CharField(max_length=20)),
            ],
        ),
    ]
