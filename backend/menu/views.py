# menu/views.py

from rest_framework import generics
from .models import MenuItem
from .serializers import MenuItemSerializer, MenuItemDetailSerializer
from rest_framework.response import Response

class MenuItemList(generics.ListCreateAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer

class MenuItemByCategory(generics.ListAPIView):
    serializer_class = MenuItemSerializer

    def get_queryset(self):
        category = self.kwargs['category']
        return MenuItem.objects.filter(category=category)

class MenuItemDetailView(generics.RetrieveAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemDetailSerializer
    lookup_field = 'name' 
    
    

