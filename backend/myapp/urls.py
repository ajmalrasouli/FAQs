# myapp/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ArticleViewSet, FAQViewSet, CategoryViewSet

router = DefaultRouter()
router.register(r'articles', ArticleViewSet)
router.register(r'faqs', FAQViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
