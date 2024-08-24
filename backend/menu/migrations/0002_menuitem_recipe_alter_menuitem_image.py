# Generated by Django 5.1 on 2024-08-23 23:46

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("menu", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="menuitem",
            name="recipe",
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="menuitem",
            name="image",
            field=models.URLField(),
        ),
    ]
