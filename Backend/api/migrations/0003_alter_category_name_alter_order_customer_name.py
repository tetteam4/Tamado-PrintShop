# Generated by Django 5.1.2 on 2024-10-30 06:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_category_options_order_customer_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='name',
            field=models.CharField(max_length=255, verbose_name='Category Name :'),
        ),
        migrations.AlterField(
            model_name='order',
            name='Customer_name',
            field=models.CharField(max_length=255, verbose_name='Customer Name :'),
        ),
    ]