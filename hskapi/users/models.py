from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils import timezone
from .managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):

    username = models.CharField(max_length=128, unique=False, blank=True)
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=256, blank=True)
    last_name = models.CharField(max_length=256, blank=True)
    nationality = models.CharField(max_length=64, blank=True)
    is_member = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    note = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, editable=True)

    USERNAME_FIELD = "email"

    objects = UserManager()

    class Meta:
        verbose_name = u'User'
        verbose_name_plural = u'Users'

    def __str__(self):
        return '%s' % self.email

    @property
    def full_name(self):
        return '%s %s' % (self.first_name, self.last_name)
