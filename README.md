
# **REST API with CRUD Functions in Swagger (Node.js)**

This project demonstrates the creation of a **RESTful API** using **Node.js**, with full **CRUD** (Create, Read, Update, Delete) operations. The API is fully documented and tested using **Swagger UI** for easy interaction and testing of the endpoints.

## 🚀 **Project Overview**

* **Language**: Node.js
* **Framework**: Express.js
* **API Documentation**: Swagger
* **Functionality**: Basic CRUD operations for managing resources.
* **Testing**: Swagger UI for testing endpoints directly.

## 🔧 **Technologies Used**

* **Node.js**: Backend JavaScript runtime environment
* **Express.js**: Web framework to build the API
* **Swagger**: API documentation and testing tool


## 📂 **Project Structure**

```
.
├── node_modules/           # Node.js dependencies
├── src/
│   ├── controllers/        # API request handlers
│   ├── routes/             # API route definitions
│   ├── models/             # Database models (if using MongoDB)
│   └── swagger/            # Swagger documentation files
├── .gitignore              # Files/folders to be ignored by Git
├── package.json            # Project metadata and dependencies
├── server.js               # Main server file
└── README.md               # Project documentation
```



## 🌐 **API Endpoints**

### 1. **GET /api/items**

Fetch all items.

**Response**:

```json
[
  { "id": "1", "name": "Item 1", "description": "Item description" },
  { "id": "2", "name": "Item 2", "description": "Item description" }
]
```

### 2. **GET /api/items/\:id**

Fetch a single item by ID.

**Response**:

```json
{ "id": "1", "name": "Item 1", "description": "Item description" }
```

### 3. **POST /api/items**

Create a new item.

**Request Body**:

```json
{ "name": "New Item", "description": "Description of new item" }
```

**Response**:

```json
{ "id": "3", "name": "New Item", "description": "Description of new item" }
```

### 4. **PUT /api/items/\:id**

Update an existing item.

**Request Body**:

```json
{ "name": "Updated Item", "description": "Updated description" }
```

**Response**:

```json
{ "id": "1", "name": "Updated Item", "description": "Updated description" }
```

### 5. **DELETE /api/items/\:id**

Delete an item by ID.

**Response**:

```json
{ "message": "Item deleted successfully" }
```

## 📝 **Swagger Documentation**

The API documentation is available through **Swagger UI**. To access it:

1. Start the application.
2. Open a browser and go to `http://localhost:3000/api-docs`.

This will open an interactive interface to test all the available endpoints.

## 🤝 **Contributing**

Feel free to fork the repository, submit issues, or open pull requests. Contributions are always welcome!

## 📄 **License**

This project is licensed under the MIT License.


