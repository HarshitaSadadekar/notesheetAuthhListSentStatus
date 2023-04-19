from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import NoteSheet, FacultyDetails, FacultyProfile
from django.contrib.auth.models import User
from rest_framework.settings import api_settings


class NoteSheetSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        key = serializers.IntegerField(read_only=True)
        model = NoteSheet
        fields = ('__all__')


class FacultyDetailsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FacultyDetails
        fields = ('__all__')


class FacultyProfileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FacultyProfile
        # fields = (
        #     'is_admin', 'first_name', 'last_name', 'employee_id', 'designation',
        #     'school', 'department', 'mobile_number',
        #     'email_address')
        fields = ('__all__')
# adding serializers for auth

class FacultyProfileSerializerWithID(serializers.ModelSerializer):
    class Meta:
        model = FacultyProfile
        # fields = (
        #     'is_admin', 'first_name', 'last_name', 'employee_id', 'designation',
        #     'school', 'department', 'mobile_number',
        #     'email_address')
        fields = ('__all__')
# adding serializers for auth
# class GetFullUserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('id', 'username', 'is_superuser', 'first_name', 'last_name')


# class UserSerializerWithToken(serializers.ModelSerializer):
#     password = serializers.CharField(write_only=True)
#     token = serializers.SerializerMethodField()

#     def get_token(self, object):
#         jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
#         jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

#         payload = jwt_payload_handler(object)
#         token = jwt_encode_handler(payload)

#         return token

#     def create(self, validated_data):
#         user = User.objects.create(
#             username=validated_data['username'],
#             first_name=validated_data['first_name'],
#             last_name=validated_data['last_name']
#         )

#         user.set_password(validated_data['password'])
#         user.save()
#         return user


#     class Meta:
#         model = User
#         fields = ('token', 'username', 'password', 'first_name',
#                   'last_name')



