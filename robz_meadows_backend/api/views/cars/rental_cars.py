from models.models import RentalCars
from models.serializers import RentalCarsSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from authentication.permissions.admin_permissions import IsAdmin, IsUser


@api_view(['GET'])
def get_rental_cars(request):
    """
    Retrieve all cars.
    """
    cars = RentalCars.objects.all()
    serializer = RentalCarsSerializer(cars, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAdmin])
def add_car(request):
    """
    Add a new car.
    """
    name = request.data.get('name')
    description = request.data.get('description')
    price = request.data.get('price')

    if not name or not price:
        return Response({"error": "Name and price are required"}, status=status.HTTP_400_BAD_REQUEST)

    try:
        car = RentalCars.objects.create(
            name=name,
            description=description,
            price=price,
            created_by=request.user,
            updated_by=request.user
        )
        car.save()
        serializer = RentalCarsSerializer(car)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    