# Generated by Django 5.0.7 on 2024-07-18 13:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ticketing', '0004_alter_ticket_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='ticket',
            name='status',
            field=models.CharField(choices=[('Open', 'Open'), ('Resolved', 'Resolved')], default='Open', max_length=10),
        ),
    ]
