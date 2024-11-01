from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models


class User(AbstractUser):
    username = models.CharField(max_length=255)
    full_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=200, unique=True)
    opt = models.CharField(max_length=6, blank=True, null=True)
    refresh_token = models.CharField(max_length=1000, blank=True, null=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    # Adding related_name to avoid clashes with the built-in User model
    groups = models.ManyToManyField(
        Group,
        related_name="custom_user_set",  # Change this to a unique name
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="custom_user_permissions_set",  # Change this to a unique name
        blank=True,
    )

    def __str__(self) -> str:
        return self.username

    def save(self, *args, **kwargs):
        email_username, domain = self.email.split("@")
        if not self.first_name or self.full_name is None:
            self.first_name = email_username
        if not self.username or self.username is None:
            self.username = email_username
        super(User, self).save(*args, **kwargs)


class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    images = models.ImageField(
        upload_to="user-folder", default="default-profile", null=True, blank=True
    )
    country = models.CharField(max_length=200, null=True, blank=True)
    full_name = models.CharField(max_length=255)
    bio = models.TextField(null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.full_name if self.full_name else str(self.user.full_name)

    def save(self, *args, **kwargs):
        if not self.full_name:
            self.full_name = self.user.username
        super(Profile, self).save(*args, **kwargs)
