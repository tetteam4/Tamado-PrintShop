<<<<<<< HEAD


# views.py
from rest_framework import viewsets
from .models import Category, Order
from .serializers import CategorySerializer, OrderSerializer

=======
# views.py
from rest_framework import viewsets

from .models import Category, Order
from .serializers import CategorySerializer, OrderSerializer


>>>>>>> 3088b194546cdea7b93e972f49b434ac96092a6d
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

<<<<<<< HEAD
=======

>>>>>>> 3088b194546cdea7b93e972f49b434ac96092a6d
class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
