from django.contrib import admin
from .models import CustomUser

class CustomUserAdmin(admin.ModelAdmin):
    list_display = ['id', 'email', 'first_name', 'last_name', 'is_staff']
    list_display_links = ['id', 'email', 'first_name']
    ordering = ['id']

admin.site.register(CustomUser, CustomUserAdmin)
