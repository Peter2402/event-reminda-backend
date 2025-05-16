from rest_framework import serializers
from .models import Event

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'
        read_only_fields = ['user']  # This hides it from the browsable API and prevents editing

from rest_framework import serializers
from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model

User = get_user_model()

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(style={'input_type': 'password'})

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Invalid credentials")
