from django import urls
from django.contrib import admin
from django.urls import path, re_path, include, reverse_lazy
from rest_framework import routers, viewsets
from django.conf.urls.static import static
from credor.api.viewsets import CredorViewSet
from django.views.generic.base import RedirectView
from devedor.api.viewsets import DevedorViewSet
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token
from users.api.viewsets import UserViewSet, UserLogIn
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework.permissions import AllowAny
from rest_framework.documentation import include_docs_urls


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter(trailing_slash=True)
router.register(r'credores', CredorViewSet)
router.register(r'devedores', DevedorViewSet)
router.register(r'users', UserViewSet)

# Swagger documentation setup
schema_view = get_schema_view(
    openapi.Info(
        title="RDD API",
        default_version='v1',
        description="Test description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="franklinpr2010@gmail.com"),
    ),
    public=True,
    permission_classes=[AllowAny],
)

urlpatterns = [
    path('rdd/v1/', include(router.urls)),
    path('rdd-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls),
    path('rdd-user-login/', UserLogIn.as_view()),
    path('rdd-token-auth/', obtain_auth_token),
    path('rdd-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('docs/', include_docs_urls(title='RDD Api')),
    re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^$', RedirectView.as_view(url=reverse_lazy('api-root'), permanent=True)),
     
] 
