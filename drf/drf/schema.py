import graphene
from graphene_django import DjangoObjectType

from authapp.models import UserDRF
from mainapp.models import Project, TODO


class UserDRFType(DjangoObjectType):
    class Meta:
        model = UserDRF
        fields = '__all__'


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class ToDoType(DjangoObjectType):
    class Meta:
        model = TODO
        fields = '__all__'


class Query(graphene.ObjectType):
    users = graphene.List(UserDRFType)
    projects = graphene.List(ProjectType)
    todos = graphene.List(ToDoType)

    def resolve_users(root, info):
        return UserDRF.objects.all()

    def resolve_projects(root, info):
        return Project.objects.all()

    def resolve_todos(root, info):
        return TODO.objects.all()


schema = graphene.Schema(query=Query)
