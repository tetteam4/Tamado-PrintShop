from accounts.models import Profile, User
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers

from .models import Category, Order, Reception


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name"] 


class OrderSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Category.objects.all()
    )
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token["full_name"] = user.full_name
        token["email"] = user.email
        token["username"] = user.username
        return token


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "full_name", "email"]


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ["id", "user", "description", "category", "created_at", "updated_at"]

    def create(self, validated_data):
        categories_data = validated_data.pop("category")
        order = Order.objects.create(**validated_data)
        fields = ["id", "name"] 
        model = Profile
        fields = ["user", "images", "country", "full_name", "bio", "date"]


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password]
    )
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ["full_name", "email", "password", "password2"]

    def validate(self, attrs):
        if attrs["password"] != attrs["password2"]:
            raise serializers.ValidationError(
                {"password": "password fields do not match!"}
            )

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            full_name=validated_data["full_name"],
            email=validated_data["email"],
        )
        email_user, _ = user.email.split("@")
        user.username = email_user
        user.set_password(validated_data["password"])
        user.save()
        return user

        # Add categories to the order
        order.category.set(categories_data)  
        return order

    def update(self, instance, validated_data):

        categories_data = validated_data.pop("category", None)

        # Update order fields
        instance.user = validated_data.get("user", instance.user)
        instance.description = validated_data.get("description", instance.description)

        categories_data = validated_data.pop("category", None)

        # Update order fields
        instance.user = validated_data.get("user", instance.user)
        instance.description = validated_data.get("description", instance.description)

        instance.save()

        # Update categories if provided
        if categories_data is not None:
            instance.category.set(categories_data)  # Use set() to update categories

        return instance


class ReceptionSerializer(serializers.ModelSerializer):
    order = OrderSerializer()
    "designer",

    class Meta:
        model = Reception
        fields = [
            "id",  # Include the ID field if you want to expose it
            "designer",  # Foreign key to the User model
            "order",  # Foreign key to the Order model
            "description",
            "price",
            "created_at",
            "updated_at",
        ]

    def create(self, validated_data):
        """Create a new Reception instance."""
        return Reception.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """Update an existing Reception instance."""
        instance.designer = validated_data.get("designer", instance.designer)
        instance.order = validated_data.get("order", instance.order)
        instance.description = validated_data.get("description", instance.description)
        instance.price = validated_data.get("price", instance.price)
        instance.save()
        return instance

class UserLogin(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["name", "email"]
