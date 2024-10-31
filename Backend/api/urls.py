from api import views as api_views
from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from .views import ReceptionListCreateView, ReceptionRetrieveUpdateDestroyView

urlpatterns = [
    path("user/login/", api_views.MyTokenObtainPairView.as_view()),
    path("user/refresh/", TokenRefreshView.as_view()),
    path("user/register/", api_views.RegisterView.as_view()),
    path(
        "user/password-rest-email/<email>",
        api_views.PasswordRegisterEmailVerifyApiView.as_view(),
    ),
    path("user/password-change/", api_views.PasswordChangeApiView.as_view()),
    path(
        "receptions/", ReceptionListCreateView.as_view(), name="reception-list-create"
    ),
    path(
        "receptions/<int:pk>/",
        ReceptionRetrieveUpdateDestroyView.as_view(),
        name="reception-detail",
    ),
]
