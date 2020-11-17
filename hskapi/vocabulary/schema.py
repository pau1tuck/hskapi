import graphene
from graphene_django import DjangoObjectType

from .models import Vocabulary


class VocabularyType(DjangoObjectType):
    class Meta:
        model = Vocabulary


class VocabularyQuery(graphene.ObjectType):
    characters = graphene.List(VocabularyType)
    character = graphene.Field(VocabularyType, id=graphene.String())

    def resolve_characters(self, info, **kwargs):
        return Vocabulary.objects.all()

    def resolve_character(self, info, id):
        return Vocabulary.objects.get(pk=id)
