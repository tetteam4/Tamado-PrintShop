from rest_framework import serializers

from .models import Category, Order, Reception


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name"]  # Include necessary fields


class OrderSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Category.objects.all()
    )

    class Meta:
        model = Order
        fields = ["id", "user", "description", "category", "created_at", "updated_at"]

    def create(self, validated_data):
        categories_data = validated_data.pop("category")
        order = Order.objects.create(**validated_data)

        # Add categories to the order
        order.category.set(categories_data)  # Use set() to associate categories
        return order

    def update(self, instance, validated_data):
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
