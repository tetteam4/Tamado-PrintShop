from django.contrib.auth import get_user_model
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _


class Category(models.Model):
    name = models.CharField(_("Category Name :"), max_length=255)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"


class Order(models.Model):
    User = get_user_model()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    Customer_name = models.CharField(_("Customer Name :"), max_length=255)
    description = models.TextField()
    category = models.ManyToManyField(Category)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)


class Reception(models.Model):
    User = get_user_model()
    designer = models.ForeignKey(User, on_delete=models.CASCADE)

    customer_name = models.CharField(_("Customer Name :"), max_length=255)
    order_name = models.ForeignKey(
        Order, on_delete=models.CASCADE, related_name="receptions"
    )
    description = models.TextField()
    price = models.DecimalField(max_digits=12, decimal_places=2, default=0.0)

    order = models.ForeignKey(
        Order,
        on_delete=models.CASCADE,
    )
    description = models.TextField(_("Description "))

    customer_name = models.TextField(_("Description "))

    price = models.DecimalField(max_digits=12, decimal_places=2)

    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.designer.first_name
