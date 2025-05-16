from django.shortcuts import render
from rest_framework import viewsets
from .models import Event
from .serializers import EventSerializer
from django.contrib.auth import get_user_model
User = get_user_model()


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework import serializers 

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.authtoken.models import Token

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            token, _ = Token.objects.get_or_create(user=user)
            return Response({"token": token.key})
        return Response(serializer.errors, status=400)
