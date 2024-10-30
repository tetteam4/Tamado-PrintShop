from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import CategoryViewSet, OrderViewSet

router = DefaultRouter()
router.register("categories", CategoryViewSet)
router.register("orders", OrderViewSet)

from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import CategoryViewSet, OrderViewSet

router = DefaultRouter()
router.register("categories", CategoryViewSet)
router.register("orders", OrderViewSet)

urlpatterns = [
    path("api/", include(router.urls)),
]
