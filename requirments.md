## Use my tech stuff

there will be items, grades for items, the rental period, and the price of each item

filter by **item** 

**users** can register and login

users can **lease** an item to rent

users can add photos, decription, rental period and price

users can **rent** an item

users can **grade** items / experience

# entities
- items
- users
- leased item
- grade

# properties

## items
- id (primary key)
- item_name (NOT NULL, string, 255)
- price (NOT NULL, integer)
- description (text)
- available (blob)

## users
- id (primary key)
- username (not NULL, UNIQUE)
- password (NOT NULL, string, 255)
- phone (string, 255)
- email (string, 255)

## leased_item
- id (primary key)
- owner_id (FK) (ref -> user.id in table users)
- renter_id (FK) (ref -> user.id in table users)
- item_id (FK) (ref -> items.id in table items)
- time_from (NOT NULL, timestamp)
- time_to (NOT NULL, timestamp)
- rental_period (NOT NULL, timestamp)
- price (NOT NULL, intiger)
- renter_grade (text)
- owner_grade (text)



