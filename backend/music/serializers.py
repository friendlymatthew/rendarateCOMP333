from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import Rating, User

# The serializer translates a Rating object into a format that
# can be stored in our database. We use the Rating model.
class RatingSerializer(serializers.ModelSerializer):
  class Meta:
    model = Rating
    # The id is automatically created as a primary key by our Django model
    # and we can included it here as well.
    fields = ('id', 'username', 'song', 'artist', 'rating')

class UserSerializer(serializers.ModelSerializer):
  username = serializers.CharField(validators=[UniqueValidator(queryset=User.objects.all())])

  class Meta:
    model = User
    fields = ('username', 'password')

  def save(self):
    inputUsername = self.validated_data['username']
    inputPassword = self.validated_data['password']

    user = User(
      username = inputUsername,
      password = inputPassword,
    )

    user.save()

