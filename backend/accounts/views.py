from .models import CustomUser
from .serializers import RegisterSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

# Create your views here.

class RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]
    

    def get(self, request):
        print(request.get_host())
        response = {
            'status' : 'Request was permitted'
        }
        return Response(response)