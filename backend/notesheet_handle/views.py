import json
from itertools import chain

from django.core.serializers import serialize
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import get_user_model
from django.shortcuts import render, redirect, get_object_or_404

from .searializers import *
from rest_framework.decorators import action
# User = get_user_model()
from users.models import User

# from rest_framework.views import APIView
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from rest_framework import permissions
#


class NoteSheetViewSet(viewsets.ModelViewSet):
    # class NoteSheetViewSet(generics.ListCreateAPIView):
    # queryset=NoteSheet.objects.filter(receiver_1 = request.user.name)
    # queryset = NoteSheet.objects.all()
    serializer_class = NoteSheetSerializer
     
    # def get_queryset(request):
    #     uu=User.objects.get(user=request.user)  
    #     # current_user = request.user
    #     queryset = NoteSheet.objects.filter(receiver_1 =uu.name)
    #     return queryset
    def get_queryset(self):
        # user = User.user
        # if not user.is_authenticated:
        #     return NoteSheet.objects.none()

        queryset = NoteSheet.objects.all()
        return queryset
    
    
    
class UpdateNoteSheetStatus(APIView):
    def put(self, request, pk):
        notesheet = get_object_or_404(NoteSheet, pk=pk)
        notesheet.status = request.data['status']
        notesheet.save()
        serializer = NoteSheetSerializer(notesheet)
        return Response(serializer.data)  
    
      
        


#
# class FacultyDetailViewSetBYID(viewsets.ModelViewSet):
# queryset = FacultyProfile.objects.filter(user=)


# for auth
@api_view(['GET'])
def get_current_user(request):
    # print(request.token)
    serializer = GetFullUserSerializer(request.user)
    # print(request.user.id)

    return Response(serializer.data)


@api_view(['GET'])
def get_faculty_profile(request):
    r_id = request.user.id
    data = FacultyProfile.objects.filter(user=r_id).values('is_admin', 'employee_id', 'designation', 'school',
                                                           'department', 'mobile_number', 'email_address')
    data2 = User.objects.filter(id=r_id).values('first_name', 'last_name')
    qset = list(chain(data, data2))
    fset = {}
    for i in qset:
        for key, value in i.items():
            fset[key] = value
    return HttpResponse(json.dumps(fset), content_type='application/json')


# @api_view(['POST'])
# def get_user(request):


class CreateUserView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        user = request.data.get('user')
        if not user:
            return Response({'response': 'error', 'message': 'No data found'})
        serializer = UserSerializerWithToken(data=user)
        if serializer.is_valid():
            saved_user = serializer.save()
        else:
            return Response({"response": "error", "message": serializer.errors})
        return Response({"response": "success", "message": "user created successfully"})
