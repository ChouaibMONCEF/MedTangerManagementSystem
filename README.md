# MedTangerManagementSystem
An API for Med Tanger port that manage everything in the Port. Authentication with JWT and there is many endpoint will be discussed in Usage

## UML  

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
Localhost:5000/api/reservation/createOne 'POST' Reserve
Localhost:5000/api/reservation/:id 'GET' Get one reservation
Localhost:5000/api/reservation/:id 'PATCH' Update one reservation
Localhost:5000/api/reservation/:id 'DELETE' Delete one reservation
//restricted to admin 
Localhost:5000/api/reservation/getAll 'GET' Get all reservations

#Port
//restricted to admin 
Localhost:5000/api/port/createOne 'POST' add new port
Localhost:5000/api/port/:id 'GET' get one port
Localhost:5000/api/port/:id 'PATCH' update one port
Localhost:5000/api/port/:id 'DELETE' Delete one port
Localhost:5000/api/port/getAll 'GET' Get all ports

#quay
//restricted to admin 
Localhost:5000/api/quay/createOne 'POST' add new quay
Localhost:5000/api/quay/:id 'GET' get one port
Localhost:5000/api/quay/:id 'PATCH' update one quay
Localhost:5000/api/quay/:id 'DELETE' Delete one quay
Localhost:5000/api/quay/getAll 'GET' Get all quays

#type
//restricted to admin 
Localhost:5000/api/type/createOne 'POST' add new type
Localhost:5000/api/type/:id 'GET' get one type
Localhost:5000/api/type/:id 'PATCH' update one type
Localhost:5000/api/type/:id 'DELETE' Delete one type
Localhost:5000/api/type/getAll 'GET' Get all types

#truck
Localhost:5000/api/truck/createOne 'POST' add new truck
Localhost:5000/api/truck/:id 'GET' get one truck
Localhost:5000/api/truck/:id 'PATCH' update one truck
Localhost:5000/api/truck/:id 'DELETE' Delete one truck
//restricted to admin 
Localhost:5000/api/truck/getAll 'GET' Get all trucks

#Storage area
//restricted to admin 
Localhost:5000/api/storagearea/createOne 'POST' add new storagearea
Localhost:5000/api/storagearea/:id 'GET' get one storagearea
Localhost:5000/api/storagearea/:id 'PATCH' update one storagearea
Localhost:5000/api/storagearea/:id 'DELETE' Delete one storagearea
Localhost:5000/api/storagearea/getAll 'GET' Get all storageareas

#Ship Owner
//restricted to admin 
Localhost:5000/api/shipowner/:id 'GET' get one ship Owner
Localhost:5000/api/shipowner/:id 'PATCH' update one ship Owner
Localhost:5000/api/shipowner/:id 'DELETE' Delete one ship Owner
Localhost:5000/api/shipowner/createOne 'POST' add new ship Owner
Localhost:5000/api/shipowner/getAll 'GET' Get all ship Owner

#Ship
//restricted to admin 
Localhost:5000/api/ship/:id 'GET' get one ship
Localhost:5000/api/ship/:id 'PATCH' update one ship
Localhost:5000/api/ship/:id 'DELETE' Delete one ship
Localhost:5000/api/ship/createOne 'POST' add new ship
Localhost:5000/api/ship/getAll 'GET' Get all ship

#Driver
//restricted to admin 
Localhost:5000/api/driver/:id 'GET' get one driver
Localhost:5000/api/driver/:id 'PATCH' update one driver
Localhost:5000/api/driver/:id 'DELETE' Delete one driver
Localhost:5000/api/driver/createOne 'POST' add new driver
Localhost:5000/api/driver/getAll 'GET' Get all driver

#Rule
//restricted to admin 
Localhost:5000/api/rule/:id 'GET' get one rule
Localhost:5000/api/rule/:id 'PATCH' update one rule
Localhost:5000/api/rule/:id 'DELETE' Delete one rule
Localhost:5000/api/rule/createOne 'POST' add new rule
Localhost:5000/api/rule/getAll 'GET' Get all rule

#Role
//restricted to admin 
Localhost:5000/api/role/:id 'GET' get one role
Localhost:5000/api/role/:id 'PATCH' update one role
Localhost:5000/api/role/:id 'DELETE' Delete one role
Localhost:5000/api/role/createOne 'POST' add new role
Localhost:5000/api/role/getAll 'GET' Get all role

#Custom Fee
//restricted to admin 
Localhost:5000/api/customFee/:id 'GET' get one Custom Fee
Localhost:5000/api/customFee/:id 'PATCH' update one Custom Fee
Localhost:5000/api/customFee/:id 'DELETE' Delete one Custom Fee
Localhost:5000/api/customFee/createOne 'POST' add new Custom Fee
Localhost:5000/api/customFee/getAll 'GET' Get all Custom Fee

#Container
//restricted to admin 
Localhost:5000/api/container/:id 'GET' get one container
Localhost:5000/api/container/:id 'PATCH' update one container
Localhost:5000/api/container/:id 'DELETE' Delete one container
Localhost:5000/api/container/createOne 'POST' add new container
Localhost:5000/api/container/getAll 'GET' Get all container


#Communication
//restricted to admin 
Localhost:5000/api/communication/:id 'GET' get one communication
Localhost:5000/api/communication/:id 'PATCH' update one communication
Localhost:5000/api/communication/:id 'DELETE' Delete one communication
Localhost:5000/api/communication/createOne 'POST' add new communication
Localhost:5000/api/communication/getAll 'GET' Get all communication

#Categorie
//restricted to admin 
Localhost:5000/api/categorie/:id 'GET' get one categorie
Localhost:5000/api/categorie/:id 'PATCH' update one categorie
Localhost:5000/api/categorie/:id 'DELETE' Delete one categorie
Localhost:5000/api/categorie/createOne 'POST' add new categorie
Localhost:5000/api/categorie/getAll 'GET' Get all categorie

#Block
//restricted to admin 
Localhost:5000/api/block/:id 'GET' get one block
Localhost:5000/api/block/:id 'PATCH' update one block
Localhost:5000/api/block/:id 'DELETE' Delete one block
Localhost:5000/api/block/createOne 'POST' add new rblock
Localhost:5000/api/block/getAll 'GET' Get all block

#Block Part
//restricted to admin 
Localhost:5000/api/blockPart/:id 'GET' get one Block Part 
Localhost:5000/api/blockPart/:id 'PATCH' update one Block Part 
Localhost:5000/api/blockPart/:id 'DELETE' Delete one Block Part 
Localhost:5000/api/blockPart/createOne 'POST' add new Block Part 
Localhost:5000/api/blockPart/getAll 'GET' Get all Block Part 

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
