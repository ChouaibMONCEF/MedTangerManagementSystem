# MedTangerManagementSystem
An API for Med Tanger port that manage everything in the Port. Authentication with JWT and there is many endpoint will be discussed in Usage

## UML  
![diagram de classe](https://user-images.githubusercontent.com/77148000/154664069-02a8d228-23cb-4c2b-a4fa-2757eb8320c2.png)


## Installation

You need NodeJS Istalled in your machine first.

After cloning the repo create the config.env file. 

```bash
NODE_ENVIRONMENT=<env>
PORT=<port>
DATABASE=<connection>
DATABASE_PASSWORD=<password>
JWT_SECRET=<secret key here>
JWT_EXPIRATION=<time>
```
then run
```
npm init
```
and 
```
npm i
```

## Usage
Now You ready to go with all these endpoints:

```javascript
#Users
Localhost:5000/api/users/login 'POST' Login
Localhost:5000/api/users/register 'POST' Register
//require authentication
Localhost:5000/api/users/getAll 'GET' Get All Users
Localhost:5000/api/users/:id 'GET' Get one user
Localhost:5000/api/users/:id 'PATCH' Update User
Localhost:5000/api/users/:id 'DELETE' Delete one user

#Reservation
Localhost:5000/api/reservation/createOne 'POST' Create One Reservation
Localhost:5000/api/reservation/:id 'GET' Get one Reservation
Localhost:5000/api/reservation/:id 'PATCH' Update one Reservation
Localhost:5000/api/reservation/:id 'DELETE' Delete one Reservation
//restricted to admin 
Localhost:5000/api/reservation/getAll 'GET' Get all Reservations

#Port
//restricted to admin 
Localhost:5000/api/port/createOne 'POST' Create new Port
Localhost:5000/api/port/:id 'GET' Get one Port
Localhost:5000/api/port/:id 'PATCH' Update one Port
Localhost:5000/api/port/:id 'DELETE' Delete one Port
Localhost:5000/api/port/getAll 'GET' Get all Ports

#Quay
//restricted to admin 
Localhost:5000/api/quay/createOne 'POST' Create new Quay
Localhost:5000/api/quay/:id 'GET' Get one Quay
Localhost:5000/api/quay/:id 'PATCH' Update one Quay
Localhost:5000/api/quay/:id 'DELETE' Delete one Quay
Localhost:5000/api/quay/getAll 'GET' Get all Quays

#Type
//restricted to admin 
Localhost:5000/api/type/createOne 'POST' Create new Type
Localhost:5000/api/type/:id 'GET' Get one Type
Localhost:5000/api/type/:id 'PATCH' Update one Type
Localhost:5000/api/type/:id 'DELETE' Delete one Type
Localhost:5000/api/type/getAll 'GET' Get all Types

#Truck
Localhost:5000/api/truck/createOne 'POST' Create new Truck
Localhost:5000/api/truck/:id 'GET' Get one Truck
Localhost:5000/api/truck/:id 'PATCH' Update one Truck
Localhost:5000/api/truck/:id 'DELETE' Delete one Truck
//restricted to admin 
Localhost:5000/api/truck/getAll 'GET' Get all Trucks

#Storage Area
//restricted to admin 
Localhost:5000/api/storagearea/createOne 'POST' Create new Storage Area
Localhost:5000/api/storagearea/:id 'GET' Get one Storage Area
Localhost:5000/api/storagearea/:id 'PATCH' Update one Storage Area
Localhost:5000/api/storagearea/:id 'DELETE' Delete one Storage Area
Localhost:5000/api/storagearea/getAll 'GET' Get all Storage Areas

#Ship Owner
//restricted to admin 
Localhost:5000/api/shipowner/:id 'GET' Get one Ship Owner
Localhost:5000/api/shipowner/:id 'PATCH' Update one Ship Owner
Localhost:5000/api/shipowner/:id 'DELETE' Delete one Ship Owner
Localhost:5000/api/shipowner/createOne 'POST' Create new Ship Owner
Localhost:5000/api/shipowner/getAll 'GET' Get all Ship Owner

#Ship
//restricted to admin 
Localhost:5000/api/ship/:id 'GET' Get one Ship
Localhost:5000/api/ship/:id 'PATCH' Update one Ship
Localhost:5000/api/ship/:id 'DELETE' Delete one Ship
Localhost:5000/api/ship/createOne 'POST' Create new Ship
Localhost:5000/api/ship/getAll 'GET' Get all Ship

#Driver
//restricted to admin 
Localhost:5000/api/driver/:id 'GET' Get one Driver
Localhost:5000/api/driver/:id 'PATCH' Update one Driver
Localhost:5000/api/driver/:id 'DELETE' Delete one Driver
Localhost:5000/api/driver/createOne 'POST' Create new Driver
Localhost:5000/api/driver/getAll 'GET' Get all Driver

#Rule
//restricted to admin 
Localhost:5000/api/rule/:id 'GET' Get one Rule
Localhost:5000/api/rule/:id 'PATCH' Update one Rule
Localhost:5000/api/rule/:id 'DELETE' Delete one Rule
Localhost:5000/api/rule/createOne 'POST' Create new Rule
Localhost:5000/api/rule/getAll 'GET' Get all Rule

#Role
//restricted to admin 
Localhost:5000/api/role/:id 'GET' Get one Role
Localhost:5000/api/role/:id 'PATCH' Update one Role
Localhost:5000/api/role/:id 'DELETE' Delete one Role
Localhost:5000/api/role/createOne 'POST' Create new Role
Localhost:5000/api/role/getAll 'GET' Get all Role

#Custom Fee
//restricted to admin 
Localhost:5000/api/customFee/:id 'GET' Get one Custom Fee
Localhost:5000/api/customFee/:id 'PATCH' Update one Custom Fee
Localhost:5000/api/customFee/:id 'DELETE' Delete one Custom Fee
Localhost:5000/api/customFee/createOne 'POST' Create new Custom Fee
Localhost:5000/api/customFee/getAll 'GET' Get all Custom Fee

#Container
//restricted to admin 
Localhost:5000/api/container/:id 'GET' Get one Container
Localhost:5000/api/container/:id 'PATCH' Update one Container
Localhost:5000/api/container/:id 'DELETE' Delete one Container
Localhost:5000/api/container/createOne 'POST' Create new Container
Localhost:5000/api/container/getAll 'GET' Get all Container


#Communication
//restricted to admin 
Localhost:5000/api/communication/:id 'GET' Get one Communication
Localhost:5000/api/communication/:id 'PATCH' Update one Communication
Localhost:5000/api/communication/:id 'DELETE' Delete one Communication
Localhost:5000/api/communication/createOne 'POST' Create new Communication
Localhost:5000/api/communication/getAll 'GET' Get all Communication

#Categorie
//restricted to admin 
Localhost:5000/api/categorie/:id 'GET' Get one Categorie
Localhost:5000/api/categorie/:id 'PATCH' Update one Categorie
Localhost:5000/api/categorie/:id 'DELETE' Delete one Categorie
Localhost:5000/api/categorie/createOne 'POST' Create new Categorie
Localhost:5000/api/categorie/getAll 'GET' Get all Categorie

#Block
//restricted to admin 
Localhost:5000/api/block/:id 'GET' Get one Block
Localhost:5000/api/block/:id 'PATCH' Update one Block
Localhost:5000/api/block/:id 'DELETE' Delete one Block
Localhost:5000/api/block/createOne 'POST' Create new Block
Localhost:5000/api/block/getAll 'GET' Get all Block

#Block Part
//restricted to admin 
Localhost:5000/api/blockPart/:id 'GET' Get one Block Part 
Localhost:5000/api/blockPart/:id 'PATCH' Update one Block Part 
Localhost:5000/api/blockPart/:id 'DELETE' Delete one Block Part 
Localhost:5000/api/blockPart/createOne 'POST' Create new Block Part 
Localhost:5000/api/blockPart/getAll 'GET' Get all Block Part 

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
