# Flight REST API

This api it's a part of a challenge where the main objective was to create a CRUD on data about Airports, Airlines and flights. 

## Stack  

This api was made with the following librarys  

- Sequelize (SQL-ORM)
- PostgresSQL
- Express
- Cors
- Morgan (as http request logger)
- Nodemon (as node watcher)
- Postman

I choose this stack because of its simple useage, great documentation and becuase they are very used in the node market.

## Start project

Before you start the project, I suggest you to create a new db with the name `airport` on postgres 
>(if you dont have postgres on your pc, I strongly suggest to install it)  

Then, create the following .env

```
PORT=3001

DB_USER=postgres
DB_PASSWORD=[Your PostgreSQL password]
DB_HOST=localhost
DB_HOST_PORT=5432
DB_DATABASE=airport
DB_DIALECT=postgres
```

Then, to start the project you need to run the following commands on your terminal once you are stood up on the project folder
```
npm install
npm start
```
if you want to use nodemon use `npm run dev` instead

## Seeders

Just 2 of the 3 seeders work. The flights seeder doesn't work because of it's large size, and by NodeJS simple methods, it can't be processed.

I do also suggest to add the folder **"archive"** at the same level as **"src"** and, inside this folder, add the following archives.
>I also sugest to take the flights.csv file and split it in files with no more than 50.000 lines. This, maybe, will make the `flightSeeder` work.

>The manifiest file has all the splited files names, one under the other. like 
>```
>flights-1.csv 
>flights-2.csv 
>flights-3.csv 
>... 
>```
>
```
📂flights
  📄flights-1.csv
  📄flights-2.csv
  ...
  📄manifiest.txt
📄airlines.csv
📄airports.csv
📄flights.csv
```

## Backend Endpoint Documentation
https://documenter.getpostman.com/view/24568701/2s8YsoyuST

## About
This project was made by Gabriel Jalil  
You can find this project on my [Github](https://github.com/JaluGJ)
You can follow me on my [Linkedin](https://www.linkedin.com/in/jalugj/)