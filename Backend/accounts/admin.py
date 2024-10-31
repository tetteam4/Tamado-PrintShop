from django.contrib import admin

from .models import Profile, User


class ProfileAdmin(admin.ModelAdmin):
    list_display = ["user", "full_name", "date"]


admin.site.register(User)
admin.site.register(Profile, ProfileAdmin)
