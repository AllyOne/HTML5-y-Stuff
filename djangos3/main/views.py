# Create your views here.

from django.http import HttpResponse

from main.models import Usuario

def main(solicitud): return HttpResponse(
	''.join('<p>%s <img src="http://djangos3.s3.amazonaws.com/%s" width=60 /></p>' 
		% (usuario.nombre, usuario.foto) for usuario in Usuario.objects.all())
)