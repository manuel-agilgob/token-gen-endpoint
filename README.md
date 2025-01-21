# token-gen-endpoint
Repo para generar los tokens de prueba para ejecutar pruebas de cypress
El endpoint corre en el puerto 3000
Solo expone el endpoint /token y recibe username,password
Regresa un string base64 y el timezone concatenado


#### Construir la imagen:
```
docker build -t token-gen-endpoint .
```

#### Ejecutar el contenedor
```
docker run -p 3000:3000 token-gen-endpoint
```

