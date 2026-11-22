
# Proyecto Final - Programación de Redes

## Integrantes

- Dilma Lorena Manso Osorio - Número de lista: 16
- Luis Alberto Sánchez Cubillos - Número de lista: 25

## Número del equipo

N = 16

Encabezado de autenticación:
X-Red-Equipo: CIAF-16

## Descripción del proyecto
Este proyecto consiste en desarrollar un servicio web
HTTP utilizando Node.js y Express.

El escenario seleccionado es un sistema de inventario
para una empresa con sucursales en Pereira y Manizales.

El servicio permite consultar los productos disponibles
y registrar nuevos productos mediante peticiones HTTP.

## Tecnologías utilizadas
- Node.js
- Express
- CORS
- JavaScript
- Postman
- Visual Studio Code

## Instalación y ejecución

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto.
3. Instalar las dependencias:

npm install

4. Iniciar el servidor:

node server.js

5. El servidor estará disponible en:

http://localhost:3000

## Endpoints

### GET /api/recurso
Permite consultar los productos registrados.

Respuesta exitosa: 200 OK.

### POST /api/recurso
Permite registrar un nuevo producto.

Ejemplo del JSON enviado:

{
  "nombre": "Teclado",
  "cantidad": 15,
  "sucursal": "Pereira"
}

Respuesta exitosa: 201 Created.

Si los datos son incorrectos, devuelve 400.

## Seguridad mediante Headers

Todas las peticiones deben enviar:

X-Red-Equipo: CIAF-16

Si el encabezado no existe o es incorrecto,
el servidor responde 401 Unauthorized.

Las respuestas autorizadas incluyen:

X-Servidor-Procesado: Equipo-16

## Configuración de CORS

Se permite el origen:

http://localhost:5500

Esto permite controlar qué origen puede leer
las respuestas desde un navegador.

## Modelo TCP/IP

Aplicación:
HTTP, Express, API REST y JSON.

Transporte:
TCP permite la comunicación confiable
entre el cliente y el servidor.

Internet:
IP se encarga del direccionamiento
y encaminamiento de los paquetes.

Acceso a la red:
Ethernet o Wi-Fi permiten la transmisión
de los datos por la red física o inalámbrica.

## HTTPS, SSL y TLS

HTTP transmite información sin cifrado
a nivel de protocolo.

HTTPS utiliza TLS para proteger la comunicación
entre el cliente y el servidor.

SSL es un protocolo antiguo que fue reemplazado
por TLS.

En este proyecto se utiliza HTTP local para
realizar las pruebas. En producción se recomienda
utilizar HTTPS con TLS.

## Pruebas realizadas con Postman

1. GET exitoso: 200 OK.
2. GET sin encabezado: 401 Unauthorized.
3. POST exitoso: 201 Created.
4. Verificación de Headers de respuesta.

La colección exportada está disponible en:

Coleccion-Postman-Equipo-16.json

## Evidencias

Se realizaron capturas de pantalla de:
- Consulta GET con respuesta 200 y Headers.
- Petición sin encabezado con respuesta 401.
- Registro POST con respuesta 201.
