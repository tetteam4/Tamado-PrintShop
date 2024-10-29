from django.contrib.auth import get_user_model
from django.db import models
from django.utils.translation import gettext_lazy as _
from phonenumber_field.modelfields import PhoneNumberField

from config.TimeStamped import TimeStampedUUIDModel


User = get_user_model()
class Gender(models.TextChoices):
    MALE = "Male", _("Male")
    FEMALE = "Female", _("Female")
    OTHER = "Other", _("Other")


class Profile(TimeStampedUUIDModel):
    user = models.OneToOneField(User, related_name="profile", on_delete=models.CASCADE)
    phone_number = PhoneNumberField(
        verbose_name=_("Phone Number"), max_length=30, default="+937777777"
    )
    about_me = models.TextField(
        verbose_name=_("About me"), default="say something about yourself"
    )
    profile_photo = models.ImageField(
        verbose_name=_("Profile Photo"), default="/profile_default.png"
    )
    gender = models.CharField(
        verbose_name=_("Gender"),
        choices=Gender.choices,
        default=Gender.MALE,
        max_length=20,
    )

    city = models.CharField(
        verbose_name=_("City"),
        max_length=180,
        default="Kabul",
        blank=False,
        null=False,
    )
    def __str__(self):
        return f"{self.user.username}'s profile"
