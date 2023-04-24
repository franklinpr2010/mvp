from django.contrib import admin
from django.urls import path, include
from rest_framework import routers, viewsets
from credor.api.viewsets import CredorViewSet
from devedor.api.viewsets import DevedorViewSet
from rest_framework.authtoken.views import obtain_auth_token


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'credores', CredorViewSet)
router.register(r'devedores', DevedorViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls),
    path('api-token-auth/', obtain_auth_token),
] 
