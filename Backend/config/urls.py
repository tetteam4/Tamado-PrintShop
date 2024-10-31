from django.contrib import admin
from django.urls import include, path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from networkx import pappus_graph
from rest_framework import permissions

schema_view = get_schema_view(
    openapi.Info(
        title="Tamadon MIS System Backend APIs",
        default_version="v1",
        description=(
            "This is the API documentation for Tamadon MIS System APIs.\n\n"
            "Contacts:\n"
            "- Ali Sina Sultani: alisinasultani@gmail.com\n"
        ),
        contact=openapi.Contact(email="alisinasultani@gmail.com"),
        license=openapi.License(name="MIT"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path(
        "swagger<format>/", schema_view.without_ui(cache_timeout=0), name="schema-json"
    ),
    path("", schema_view.with_ui("swagger", cache_timeout=0), name="schema-swagger-ui"),
    path("redoc/", schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc"),
    path("admin/", admin.site.urls),
    path('profile/', include('profiles.urls')),
    path('category/',include('api.urls')),
    path("api/auth/", include("djoser.urls")),
    path("api/auth/", include("djoser.urls.jwt")),
    
]
admin.site.site_header = "Tamadon Admin"
admin.site.site_title = "Tamando Admin Area."
admin.site.index_title = "Welcome to the Tamando administration "
