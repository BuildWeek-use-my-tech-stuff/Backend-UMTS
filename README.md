# Backend-UMTS

### BaseURL: https://use-my-tech-stuff-bw.herokuapp.com/api
---

# **Authentication**

## Register User
```
POST /auth/register
```
| name     	| type   	| description                	|   	|   	|
|----------	|--------	|----------------------------	|---	|---	|
| username 	| string 	| users name *required       	|   	|   	|
| password 	| string 	| users password *required   	|   	|   	|
| email    	| string 	| users email (not required) 	|   	|   	|
| phone    	| string 	| users phone (not required) 	|   	|   	|

### response 

```
{
  "message": "Welcome bobby2113!",
  "email": "test@email.com",
  "phone": "801-555-5555",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...etc."
}
```
---

## Login User
```
POST /auth/login
```

| name     	| type   	| description              	|   	|   	|
|----------	|--------	|--------------------------	|---	|---	|
| username 	| string 	| users name *required     	|   	|   	|
| password 	| string 	| users password *required 	|   	|   	|

### response 

```
{
  "message": "Welcome bobby2113!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...etc."
}
```
---
# **users items**

| name        	| type    	| description                                             	|
|-------------	|---------	|---------------------------------------------------------	|
| id          	| integer 	| user_items id                                       	|
| photo       	| string  	| photo of item (cannot be longer than 1000 characters) 	|
| item_name   	| string  	| name of item *required                                	|
| description 	| text    	| description of item * required                        	|
| price       	| number with 2 decimal places 	| price of item *required (ex: 20.00)                   	|
| available   	| boolean 	| if the item is available * required                     	|
| user_id     	| integer 	| the id of the user *required                            	|

## GET user items

```
GET /users/:id/user-items
```
### response 

```
[
  {
    "id": 8,
    "photo": "https://unsplash.com/photos/BZzHWmQUszE",
    "item_name": "jacket",
    "description": "this is the decription",
    "price": "22.00",
    "available": true,
    "user_id": 2
  },
  {
    "id": 9,
    "photo": "https://unsplash.com/photos/BZzHWmQUszE",
    "item_name": "iphone",
    "description": "brand new iphone",
    "price": "822.00",
    "available": true,
    "user_id": 2
  },
  {
    "id": 10,
    "photo": "https://unsplash.com/photos/BZzHWmQUszE",
    "item_name": "keyboard",
    "description": "I have an extra keyboard",
    "price": "15.00",
    "available": true,
    "user_id": 2
  }
]

```
---

## GET user item by ID

```
GET /users/user-items/:id
```
### response 

```
{
  "id": 2,
  "photo": "https://unsplash.com/photos/BZzHWmQUszE",
  "item_name": "computer",
  "description": "this is the decription",
  "price": "235.22",
  "available": true,
  "user_id": 2
}
```
---

## POST user item

```
POST users/:id/user-items
```

### response 

```
{
  "message": "item was successfully created!",
  "item": {
    "id": 16
  }
}
```
---

## PUT user item

```
PUT /users/user-items/:id
```

### response 

```
{
  "message": "item was successfully updated!",
  "item": 1
}

item gives 1 if updated was successful, 0 if update failed
```
---

## DELETE user item 

```
DELETE /users/user-items/:id
```

### response 

```
{
  "deleted": 1, 
  "message": "item (id of item) was deleted"
}
```
---

# **items**

| name        	| type    	| description                                        	|
|-------------	|---------	|----------------------------------------------------	|
| id          	| integer 	| id of item (automatically added)                   	|
| photo       	| string  	| item photo (cannot be longer than 1000 characters) 	|
| item_name   	| string  	| item name *required                                	|
| description 	| text    	| item description * required                        	|
| price       	| number with 2 decimal places	| item price *required (ex: 20.00)                   	|
| available   	| boolean 	| if the item is available * required                	|

## GET items

```
GET /items
```
### response

```
[
  {
    "id": 1,
    "photo": "https://unsplash.com/photos/BZzHWmQUszE",
    "item_name": "computer",
    "description": "this is the decription",
    "available": 1,
    "price": 237.22
  },
  {
    "id": 2,
    "photo": "https://unsplash.com/photos/BZzHWmQUszE",
    "item_name": "computer",
    "description": "this is the decription",
    "available": 1,
    "price": 25.12
  },
  {
    "id": 3,
    "photo": "https://unsplash.com/photos/BZzHWmQUszE",
    "item_name": "computer",
    "description": "this is the decription",
    "available": 1,
    "price": 33.25
  }
]

```
## GET items by ID

```
GET /items/:id
```
### response

```
{
  "id": 2,
  "photo": "https://unsplash.com/photos/BZzHWmQUszE",
  "item_name": "computer",
  "description": "this is the decription",
  "available": 1,
  "price": 25.12
}
```

## POST item

```
POST /items
```
### response

```
{
  "message": "item was successfully created!",
  "item": {
    "id": 13
  }
}
```
---

## PUT item

```
PUT /items/:id
```
### response 

```
{
  "message": "item was successfully updated!",
  "item": 1
}
```
### error message if no item_name or description

```
{
  errorMessage: "Please provide a item name and description"
}
```
---

## delete item 

```
DELETE /items/:id
```
### response 

```
{
  "message": "item was successfully updated!",
  "item": 1
}
```
### error message if item was removed or does not exist 

```
{
  "message": "The item with the specified ID does not exist"
}
```
