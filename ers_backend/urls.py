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
 path('api/', include([
        path('events/', include(router.urls)),  # Optional (already included below)
        path('register/', RegisterView.as_view(), name='register'),  # ✅ This is what was missing
        path('login/', LoginView.as_view(), name='login'),
        path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
        path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
        path('', include(router.urls)),  # Keep this to serve /api/events/
    ])),
]