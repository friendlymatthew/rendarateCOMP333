from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RatingSerializer, UserSerializer
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from .models import User,Rating

# Create your views here.

# Our Rating view.
class RatingView(viewsets.ModelViewSet):
  # Create a new RatingSerializer instance.
  serializer_class = RatingSerializer
  # Rating.objects.all() retrieves all the Rating objects in the database.
  queryset = Rating.objects.all()

class RegisterView(viewsets.ModelViewSet):
  serializer_class = UserSerializer
  queryset = User.objects.all()
