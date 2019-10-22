# Backend-UMTS

### BaseURL: https://use-my-tech-stuff-bw.herokuapp.com/api

# **Auth**

## **Register User**
```
POST /auth/register
```
---
| name     	| type   	| description                	|   	|   	|
|----------	|--------	|----------------------------	|---	|---	|
| username 	| string 	| users name *required       	|   	|   	|
| password 	| string 	| users password *required   	|   	|   	|
| email    	| string 	| users email (not required) 	|   	|   	|
| phone    	| string 	| users phone (not required) 	|   	|   	|

## response 

```
{
  "message": "Welcome bobby2113!",
  "email": "test@email.com",
  "phone": "801-555-5555",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJvYmJ5MjExMyIsInN1YmplY3QiOjEzLCJpYXQiOjE1NzE2NzI0NzUsImV4cCI6MTU3MTY3NjA3NX0.B-TStUjz6MtAbJ2_-VbSgc2emd4rlm-6apNuN15z7k8"
}
```

## **Login User**
```
POST /auth/login
```
---
| name     	| type   	| description              	|   	|   	|
|----------	|--------	|--------------------------	|---	|---	|
| username 	| string 	| users name *required     	|   	|   	|
| password 	| string 	| users password *required 	|   	|   	|

## response 

```
{
  "message": "Welcome bobby2113!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJvYmJ5MjExMyIsInN1YmplY3QiOjEzLCJpYXQiOjE1NzE2NzI1MzgsImV4cCI6MTU3MTY3NjEzOH0.v_6r-766RUP89r8wFxBlZTn4P7U7eeCxMnsuD_CRnwQ"
}
```
# user_items
---
| name        	| type    	| description                                             	|
|-------------	|---------	|---------------------------------------------------------	|
| id          	| integer 	| user_items id                                       	|
| photo       	| string  	| photo of item (cannot be longer than 1000 characters) 	|
| item_name   	| string  	| name of item *required                                	|
| description 	| text    	| description of item * required                        	|
| price       	| decimal 	| price of item *required (ex: 20.22)                   	|
| available   	| boolean 	| if the item is available * required                     	|
| user_id     	| integer 	| the id of the user *required                            	|

### GET user items

```
GET /:id/user-items
```
## response 

```
{
    "id": 5,
    "photo": "https://unsplash.com/photos/BZzHWmQUszE",
    "item_name": "computer",
    "description": "this is the decription",
    "price": "20.22",
    "available": true,
    "user_id": 1
  }

```
---

### POST create user item

```
POST /:id/user_items
```

## response 
### responses with id of item

```
{
  "id": 7 
}
```
