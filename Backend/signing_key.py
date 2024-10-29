import secrets
import django
from django.contrib.auth import get_user_model
from django.conf import settings

# Generate a secure random signing key
signing_key = secrets.token_hex(32)  # 64-character hex string
print(signing_key)

new_user = settings.AUTH_USER_MODEL.objects.create(username='john_doe', email='john@example.com')
print(f"User ID: {new_user.id}")