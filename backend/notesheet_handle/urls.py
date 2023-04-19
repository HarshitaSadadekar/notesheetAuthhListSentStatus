from django.urls import include, path
from rest_framework import routers
from . import views
from .views import *

router = routers.DefaultRouter()
router.register(r'notesheet', views.NoteSheetViewSet,basename='notesheet')
# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('current_user/', get_faculty_profile),
    path('users/create', CreateUserView.as_view()),
    path('notesheet/<int:pk>/status/', UpdateNoteSheetStatus.as_view()),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
