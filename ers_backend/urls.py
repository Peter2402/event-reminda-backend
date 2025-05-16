from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from core.views import RegisterView
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from core.views import EventViewSet

router = routers.DefaultRouter()
router.register(r'events', EventViewSet)

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Login
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Refresh
    path('api/register/', RegisterView.as_view(), name='register'),  # Signup
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
