from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from core.views import RegisterView, LoginView, EventViewSet

router = routers.DefaultRouter()
router.register(r'events', EventViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),

    # API endpoints
    path('api/', include(router.urls)),              # Event API
    path('api/register/', RegisterView.as_view(), name='register'),  # Signup
    path('api/login/', LoginView.as_view(), name='login'),           # Token Login
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # JWT login (if used)
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # JWT refresh
]
