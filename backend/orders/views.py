from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from orders.serializer import OrderSerializer


# Create your views here.
@method_decorator(csrf_protect, name="dispatch")
class SaveNewOrder(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
