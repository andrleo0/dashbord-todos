# Development
Pasos para levantar la app en desarrollo 

* levantar la base de datos 
```
docker compose up -d
```
2. Crear una copia de el .env.template y renombralo a .env
3. Remplazar las variables de entorno
4. Ejecutar el comando ``` npm install ```
5. Ejecutar el comando ``` npm run dev ```
6. Ejecutar estos comando de prisma 
``` 
npx prisma migrate dev
npx prisma generate
```
7. Ejecutar el SEED [para crear la base de datos local](localhost:3000/api/seed)


# Prisma commands
```
npx prisma init 
npx prisma migrate dev
npx prisma generate
npx prisma db pull
npx prisma db push
```

# Prod


# Stage


# comments
* next, node , postgres son carpetas que puedo borrar
* repetir el ```npx prisma generate``` luego de un ```npx prisma db pull```
* cuidado con el ```npx prisma migrate dev``` porque limpia toda la base de datos
* cuidado con el ```npx prisma db push``` porque hace los cambios sin pasar por el comando ```npx prisma migrate dev```