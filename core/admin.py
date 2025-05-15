from django.contrib import admin
from django.contrib.admin import AdminSite
from .models import User, Event, Reminder, NotificationLog
from django.contrib.auth.admin import UserAdmin

# Customize admin site branding
admin.site.site_header = "Event Reminder"
admin.site.site_title = "Event Reminder Admin"
admin.site.index_title = "Welcome to Event Reminder Admin Panel"

# Register models
admin.site.register(User, UserAdmin)
admin.site.register(Event)
admin.site.register(Reminder)
admin.site.register(NotificationLog)
