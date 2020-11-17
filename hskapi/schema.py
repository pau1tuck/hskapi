import graphene
from graphene_django import DjangoObjectType
import hskapi.vocabulary.schema


class Query(hskapi.vocabulary.schema.VocabularyQuery, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)
