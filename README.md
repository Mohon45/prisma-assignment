
## LIVE LINK: https://book-cattaloge-backend.vercel.app/

### USER
* api/v1/auth/signup (POST)
* api/v1/users (GET)
* api/v1/users/7a58719b-8434-412f-994e-a01f069285de (Single GET) 
* api/v1/users/9108e33b-6389-4342-b0de-96f7c2621df7 (PATCH)
* api/v1/users/9108e33b-6389-4342-b0de-96f7c2621df7 (DELETE) 
* api/v1/profile (GET)

  ### CATEGORY
* api/v1/categories/create-category (POST)
* api/v1/categories (GET)
* api/v1/categories/"0572fa6e-f2cf-4f64-9a6a-3f1b628cad77 (Single GET) 
* api/v1/categories/fcfe1362-c4d5-4533-a2cc-23d56174a8f1 (PATCH)
* api/v1/categories/fcfe1362-c4d5-4533-a2cc-23d56174a8f1 (DELETE)

### BOOK
* api/v1/books/create-book (POST)
* api/v1/books (GET)
* api/v1/books/:categoryId/category (GET)
* api/v1/books/:id (GET)
* api/v1/books/:id (PATCH)
* api/v1/books/:id (DELETE)

### ORDER
* api/v1/orders/create-order (POST)
* api/v1/orders (GET)
* api/v1/orders/:orderId (GET)

