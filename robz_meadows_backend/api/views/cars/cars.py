from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from authentication.permissions.admin_permissions import IsAdmin
from models.models import Cars
from models.serializers import CarsSerializer
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET'])
def get_cars(request):
    """
    Retrieve all cars.
    """
    cars = Cars.objects.all()
    serializer = CarsSerializer(cars, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAdmin])
def new_car(request):
    name = request.data.get('name')
    description = request.data.get('description')
    price = request.data.get('price')

    try:
        cars = Cars.objects.create(
            name=name,
            description=description,
            price=price,
            created_by=request.user,
            updated_by=request.user
        )
        cars.save()
        serializer = CarsSerializer(cars)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    

