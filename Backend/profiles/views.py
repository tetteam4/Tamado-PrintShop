from unittest import mock
from requests import get
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView

from profiles.exceptions import NotYourAccount, ProfileNotFound

from .models import Profile
from .renderers import ProfileJSONRenderer
from .serializers import ProfileSerializer, UpdateProfileSerializer




"""
    from rest_framework import api_view, permissions

    @api_view(["GET"])
    @permission_classes((permissions.IsAuthenticated))
    def get_all_agents(request):
        agents = Profile.objects.filter(is_agent=True)
        serializer=ProfileSerializer(agents, many=True)
        name_spaced_response={"agents": serializer.data}
        return Response(name_spaced_response,status=status.HTTP_200_OK)

"""



class GetProfileAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [ProfileJSONRenderer]

    def get(self, request):
        user = self.request.user
        user_profile = Profile.objects.get(user=user)
        serializer = ProfileSerializer(user_profile, context={"request": request})
        return Response(serializer.data, status=status.HTTP_200_OK)


class UpdateProfileAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [ProfileJSONRenderer]

    serializer_class = UpdateProfileSerializer

    def patch(self, request, username):
        try:
            Profile.objects.get(user__username=username)
        except Profile.DoesNotExist:
            raise ProfileNotFound

        user_name = request.user.username
        if user_name != username:
            raise NotYourAccount

        data = request.data
        serializer = UpdateProfileSerializer(
            instance=request.user.profile, data=data, partial=True
        )

        serializer.is_valid()
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)


from django.conf import settings
from django.contrib.auth import get_user_model

User = get_user_model()
new_user = User.objects.get(username='admin', email='admin@gmail.com')
print(f"User ID: {new_user.id}")