# menu/urls.py

from django.urls import path
from .views import MenuItemList, MenuItemByCategory, MenuItemDetailView


urlpatterns = [
    path('menu/', MenuItemList.as_view(), name='menu-list'),
    path('menu/category/<str:category>/', MenuItemByCategory.as_view(), name='menu-by-category'),
    path('menu/<str:name>/', MenuItemDetailView.as_view(), name='menu-detail'),
]
