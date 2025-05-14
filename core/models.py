from django.db import models
from django.contrib.auth.models import AbstractUser

# Custom User model
class User(AbstractUser):
    phone_number = models.CharField(max_length=20, blank=True, null=True)

class Event(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    event_time = models.DateTimeField()
    location = models.CharField(max_length=255, blank=True)
    is_recurring = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

class Reminder(models.Model):
    event = models.OneToOneField(Event, on_delete=models.CASCADE)
    remind_before = models.IntegerField(help_text="Time in minutes")
    channel = models.CharField(max_length=10, choices=[('SMS', 'SMS'), ('Email', 'Email'), ('Push', 'Push')])
    scheduled_time = models.DateTimeField()

class NotificationLog(models.Model):
    reminder = models.ForeignKey(Reminder, on_delete=models.CASCADE)
    status = models.CharField(max_length=50)
    sent_at = models.DateTimeField()
    error_message = models.TextField(blank=True, null=True)
