# Generated by Django 3.1.3 on 2020-11-14 10:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Vocabulary',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lesson_id', models.PositiveIntegerField()),
                ('simplified_chinese', models.CharField(max_length=8)),
                ('traditional_chinese', models.CharField(max_length=8)),
                ('pinyin', models.CharField(max_length=32)),
                ('pinnum', models.CharField(max_length=32)),
                ('pinplain', models.CharField(max_length=32)),
                ('english', models.CharField(max_length=32)),
                ('date_modified', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'Vocabulary',
                'verbose_name_plural': 'Vocabulary',
            },
        ),
    ]
