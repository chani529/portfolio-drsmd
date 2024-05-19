from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Account
from rest_framework.response import Response

# Create your views here.
class UserLoginAPIView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        obj = Account.objects.get(email=email)
        if request.data.get('password') == obj.password:
            refresh = RefreshToken.for_user(obj)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
