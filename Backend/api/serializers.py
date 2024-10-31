from accounts.models import Profile, User
from api.models import Category, Order, Reception
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
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
        ref_name = "ApiUserSerializer"


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
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


class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["name"]


class UserLogin(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["full_name", "email"]


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ["id", "Customer_name", "order_name"]


class ReceptionSerializer(serializers.ModelSerializer):
    category = CategorySerializers(
        many=True
    )  # Use the CategorySerializer for the ManyToMany field

    class Meta:
        model = Reception
        fields = [
            "id",
            "designer",
            "customer_name",
            "order_name",
            "description",
            "price",
            "category",  # Include the ManyToMany field
            "created_at",
            "updated_at",
        ]

    def create(self, validated_data):
        category_data = validated_data.pop("category")  # Extract category data
        reception = Reception.objects.create(
            **validated_data
        )  # Create Reception instance
        reception.category.set(category_data)  # Set the ManyToMany relationships
        return reception

    def update(self, instance, validated_data):
        category_data = validated_data.pop(
            "category", None
        )  # Extract category data if provided
        if category_data is not None:
            instance.category.set(category_data)  # Update ManyToMany relationships

        instance.designer = validated_data.get("designer", instance.designer)
        instance.customer_name = validated_data.get(
            "customer_name", instance.customer_name
        )
        instance.order_name = validated_data.get("order_name", instance.order_name)
        instance.description = validated_data.get("description", instance.description)
        instance.price = validated_data.get("price", instance.price)
        instance.save()
        return instance
