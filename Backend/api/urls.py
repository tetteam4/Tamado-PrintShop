# urls.py
<<<<<<< HEAD
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import CategoryViewSet, OrderViewSet

router = DefaultRouter()
router.register("categories", CategoryViewSet)
router.register("orders", OrderViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
=======
from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import CategoryViewSet, OrderViewSet

router = DefaultRouter()
router.register("categories", CategoryViewSet)
router.register("orders", OrderViewSet)

urlpatterns = [
    path("api/", include(router.urls)),
>>>>>>> 3088b194546cdea7b93e972f49b434ac96092a6d
]
